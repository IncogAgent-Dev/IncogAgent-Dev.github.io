export default function Chat() {
  return (
    <div className="relative w-full flex-grow">
      <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] bg-blue-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-8%] w-[520px] h-[520px] bg-purple-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none" />

      <section className="relative w-full pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="mail-fade-up">
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight leading-tight">
                IncogAgent™ Chat:
                <span className="mt-2 block text-2xl sm:text-3xl font-semibold text-gray-700 tracking-normal">
                  Seamless privacy masking.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-gray-500 font-light leading-relaxed">
                You chat as usual. Sensitive information is automatically replaced
                with placeholders before model calls, then mapped back on return.
              </p>

            </div>

            <div id="demo" className="mail-fade-up">
              <div className="rounded-3xl border border-white bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3">
                <div className="rounded-2xl overflow-hidden bg-gray-900/90">
                  <video
                    className="w-full h-full object-cover"
                    src="/mail/Chat_Demo.mov"
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

          <div id="how" className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                You See
              </div>
              <p className="mt-3 text-sm text-gray-600">
                When you send, sensitive fields become placeholders such as
                <span className="font-mono text-primary"> {"{{PERSON_1}}"}</span>,
                <span className="font-mono text-primary"> {"{{EMAIL_1}}"}</span>,
                <span className="font-mono text-primary"> {"{{LINK_1}}"}</span>.
              </p>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Model Side
              </div>
              <p className="mt-3 text-sm text-gray-600">
                The model only sees masked text and never the original values.
              </p>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Return
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Responses are mapped back automatically so you read natural
                replies with no extra steps.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-sm text-gray-600">
            Masking and mapping happen locally. A local mapping table keeps the
            same placeholder stable for the same entity across turns.
          </div>
          <div className="mt-3 text-sm font-semibold text-gray-900">
            This reduces exposure risk, but it is not encryption. Avoid sending
            content you should not share, and clear mappings or cache anytime.
          </div>
        </div>
      </section>

      <section className="relative w-full pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="font-semibold text-gray-900">
                Do I need to rewrite my prompts?
              </div>
              <div className="mt-2">No. Type normally.</div>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="font-semibold text-gray-900">
                Will the model see my real email or name?
              </div>
              <div className="mt-2">
                No. It only sees the placeholder version.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
