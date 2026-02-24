export default function Chat() {
  return (
    <div className="relative w-full flex-grow">
      <div className="absolute top-[-12%] left-[-8%] w-[520px] h-[520px] bg-blue-400/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-12%] right-[-8%] w-[520px] h-[520px] bg-sky-300/20 rounded-full blur-[160px] pointer-events-none" />

      <section className="relative w-full pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="mail-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white px-4 py-1 text-xs uppercase tracking-[0.35em] text-gray-500 shadow-sm">
                IncogAgent Chat
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                IncogAgent-Chat: seamless privacy masking.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-gray-600">
                You chat as usual. Sensitive information is automatically replaced
                with placeholders before model calls, then mapped back on return.
              </p>

            </div>

            <div id="demo" className="mail-fade-up">
              <div className="rounded-3xl border border-white bg-white/70 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-3">
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
            <div className="rounded-2xl border border-white bg-white/70 p-5 shadow-sm">
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
            <div className="rounded-2xl border border-white bg-white/70 p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Model Side
              </div>
              <p className="mt-3 text-sm text-gray-600">
                The model only sees masked text and never the original values.
              </p>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Return
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Responses are mapped back automatically so you read natural
                replies with no extra steps.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white bg-white/70 p-6 shadow-sm text-sm text-gray-600">
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
            <div className="rounded-2xl border border-white bg-white/70 p-5 shadow-sm">
              <div className="font-semibold text-gray-900">
                Do I need to rewrite my prompts?
              </div>
              <div className="mt-2">No. Type normally.</div>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 p-5 shadow-sm">
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
