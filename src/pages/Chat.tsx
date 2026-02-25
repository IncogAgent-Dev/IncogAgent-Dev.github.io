export default function Chat() {
  return (
    <div className="relative w-full flex-grow overflow-hidden">
      {/* Background Blobs (Matched with Mail) */}
      <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] bg-blue-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none dark:opacity-50" />
      <div className="absolute top-[20%] right-[-8%] w-[520px] h-[520px] bg-purple-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none dark:opacity-50" />
      <div className="absolute bottom-[-10%] left-[15%] w-[420px] h-[420px] bg-indigo-200/20 rounded-full mix-blend-multiply blur-[140px] pointer-events-none dark:opacity-30" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Left Column: Text & CTA */}
            <div className="flex-1 max-w-2xl lg:max-w-xl xl:max-w-2xl z-10">
              <div className="mail-fade-up">
                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 tracking-tight leading-tight">
                  IncogAgent™ Chat:
                  <span className="mt-2 block text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-400 tracking-normal">
                    Seamless privacy masking.
                  </span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                  You chat as usual. Sensitive information is automatically replaced
                  with placeholders before model calls, then mapped back on return.
                </p>

                {/* Download Button Placeholder */}
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    disabled
                    className="group flex w-full sm:w-auto items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800/80 px-8 py-3.5 text-sm font-semibold text-gray-400 dark:text-gray-500 cursor-not-allowed shadow-sm ring-1 ring-gray-200 dark:ring-gray-700/50"
                  >
                    <svg className="mr-2.5 h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Available Soon
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Video */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none mx-auto relative z-10 mail-fade-up">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-[2rem] blur-xl opacity-50 animate-pulse-slow"></div>
              {/* 移除了多余的 lg:p-4 和内层 border，保持轻盈感 */}
              <div className="relative rounded-3xl border border-white dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/50 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3">
                <div className="rounded-2xl overflow-hidden bg-gray-900/90">
                  <video
                    className="w-full h-full object-cover"
                    src="/chat/Chat_Demo.mov"
                    preload="auto"
                    muted
                    autoPlay
                    loop
                    playsInline
                    onCanPlay={(event) => {
                      const video = event.currentTarget;
                      if (video.paused) {
                        video.play().catch(() => undefined);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section id="how" className="relative w-full pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                You See
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                When you send, sensitive fields become placeholders such as
                <span className="font-mono text-sm bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 px-1.5 py-0.5 rounded mx-1">{"{{PERSON_1}}"}</span>,
                <span className="font-mono text-sm bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 px-1.5 py-0.5 rounded mx-1">{"{{EMAIL_1}}"}</span>,
                <span className="font-mono text-sm bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 px-1.5 py-0.5 rounded ml-1">{"{{LINK_1}}"}</span>.
              </p>
            </div>
            
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-purple-500 dark:text-purple-400">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                Model Side
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                The model only sees masked text and never the original values.
              </p>
            </div>
            
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-green-500 dark:text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                Return
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Responses are mapped back automatically so you read natural
                replies with no extra steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice / Boundary Section */}
      <section className="relative w-full pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100/50 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/40 to-indigo-50/20 dark:from-blue-900/10 dark:to-indigo-900/10 backdrop-blur-xl p-8 sm:p-10 lg:p-12 shadow-sm">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  Masking and mapping happen locally. A local mapping table keeps the
                  same placeholder stable for the same entity across turns.
                </p>
                <div className="border-l-2 border-amber-400 pl-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">
                    This reduces exposure risk, but it is not encryption. Avoid sending
                    content you should not share, and clear mappings or cache anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative w-full py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 加上了和 Mail 一模一样的 FAQ 标题 */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">FAQ</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                Do I need to rewrite my prompts?
              </div>
              <div className="leading-relaxed">
                No. Type normally.
              </div>
            </div>
            
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                Will the model see my real email or name?
              </div>
              <div className="leading-relaxed">
                No. It only sees the placeholder version.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}