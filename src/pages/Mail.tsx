export default function Mail() {
  const sections = [
    {
      id: "setup",
      title: "Enable in minutes. Hover to summarize.",
      value:
        "Connect Google once, add your model endpoint, and summaries appear the moment you hover a Gmail thread with no workflow change required.",
      bullets: [
        "One-click Sign in with Google",
        "Set Endpoint, Model, and API Key",
        "Hover any thread to get a clean summary",
      ],
      youSee: "Signed in. Add your endpoint and API key.",
      weDo: "Store settings locally and activate hover summaries.",
      trust: "Your API key is stored in extension storage. Clear anytime.",
      video: "/mail/1-set-api-key.mp4",
    },
    {
      id: "privacy-mask",
      title: "Mask first. Then let AI read.",
      value:
        "Names, emails, links, and identifiers are replaced with consistent placeholders so the model understands context without seeing raw sensitive values.",
      bullets: [
        "The model receives masked text only",
        "Placeholders stay consistent to preserve meaning",
        "Protected spans are visibly highlighted in the UI",
      ],
      youSee: "Your privacy has been protected.",
      weDo: "Mask locally before any request leaves your device.",
      note:
        "Protected by IncogAgent. This text stayed private before calling the AI.",
      video: "/mail/2-privacy-mask.mp4",
    },
    {
      id: "action-needed",
      title: "Spot what needs you instantly.",
      value:
        "We flag threads that likely require action, explain the reason in one line, and suggest a next step without nagging when confidence is low.",
      bullets: [
        "Badge appears: ACTION NEEDED",
        "Includes a short why and suggested next",
        "Low confidence means no forced flag",
      ],
      youSee: "ACTION NEEDED: waiting for your confirmation.",
      weDo: "Score confidence and only flag when reliable.",
      note: "No guessy automation. Just signals you can trust.",
      video: "/mail/3-action-needed.mp4",
    },
    {
      id: "labels",
      title: "One-click labels. Real Gmail updates.",
      value:
        "Summaries include a suggested label. Click once to apply it to the Gmail thread via Gmail API so your inbox stays sorted without manual triage.",
      bullets: [
        "Shows suggested Type and Label",
        "Button: Add label: <Label>",
        "Applies labels in Gmail, not just local tags",
      ],
      youSee: "Label added to this thread.",
      weDo: "Call Gmail API only when you click.",
      note: "Adding label... then Label added: <Label>. Failure: Unable to add label.",
      video: "/mail/4-add-label.mp4",
    },
    {
      id: "reply-drafts",
      title: "Draft faster. You stay in control.",
      value:
        "Open the Reply Assistant beside the Gmail reply box, type a short intent, and generate an editable draft you can insert or replace with no auto-send.",
      bullets: [
        "Open via the sparkle button next to the reply box",
        "Prompt with intent such as Polite refusal",
        "Insert or Replace into the editor",
      ],
      youSee: "Inserted into reply box.",
      weDo: "Generate a draft and paste it. No sending.",
      boundary:
        "IncogAgent never clicks Send. Drafts are always user-triggered and editable.",
      video: "/mail/5-autoreply.mp4",
    },
  ];

  return (
    <div className="relative w-full flex-grow">
      <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] bg-blue-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-8%] w-[480px] h-[480px] bg-purple-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[15%] w-[420px] h-[420px] bg-indigo-200/20 rounded-full mix-blend-multiply blur-[140px] pointer-events-none" />

      <section className="relative w-full pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight leading-tight">
            IncogAgent™ Mail:
            <span className="mt-2 block text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 tracking-normal">
              Private AI inside Gmail.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
            Hover for instant summaries. Draft replies faster.
            <br />
            Sensitive data is masked before any model call.
          </p>

          <div className="mt-6 space-y-1 text-sm text-gray-500">
            <div>
              <span className="font-semibold text-gray-700">Privacy-first:</span>{" "}
              identifiers are masked locally before requests.
            </div>
            <div>
              <span className="font-semibold text-gray-700">No auto-send:</span>{" "}
              we never send emails for you.
            </div>
          </div>

          <div className="mt-10 text-xs uppercase tracking-[0.35em] text-gray-400">
            Scroll to see it in action
          </div>
        </div>
      </section>

      <section id="blocks" className="relative w-full py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={section.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`${isReversed ? "lg:order-2" : ""} mail-fade-up`}>
                  <div className="mb-4 h-px w-12 bg-gray-200" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-gray-600">
                    {section.value}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-sm text-gray-600">
                    <div>
                      <span className="font-semibold text-gray-800">You see:</span>{" "}
                      {section.youSee}
                    </div>
                    <div className="mt-2">
                      <span className="font-semibold text-gray-800">We do:</span>{" "}
                      {section.weDo}
                    </div>
                  </div>

                  {section.trust && (
                    <div className="mt-3 text-xs text-gray-500">
                      {section.trust}
                    </div>
                  )}
                  {section.note && (
                    <div className="mt-3 text-xs text-gray-500">{section.note}</div>
                  )}
                  {section.boundary && (
                    <div className="mt-4 text-sm font-semibold text-gray-900">
                      {section.boundary}
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    isReversed ? "lg:order-1" : ""
                  } mail-fade-up`}
                >
                  <div className="rounded-3xl border border-white bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3">
                    <div className="rounded-2xl overflow-hidden bg-gray-900/90">
                      <video
                        className="w-full h-full object-cover"
                        src={section.video}
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
            );
          })}
        </div>
      </section>

      <section className="relative w-full py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900">Privacy and Boundaries</h3>
            <p className="mt-3 text-sm text-gray-600">
              Minimal context. Local-first. Always reversible.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Mask before model calls with no raw identifiers sent.</li>
              <li>No auto-send. You confirm every action.</li>
              <li>Clear config and cache anytime.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="relative w-full py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900">FAQ</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="font-semibold text-gray-900">
                Does it read my inbox automatically?
              </div>
              <div className="mt-2">
                No. Summaries appear only when you hover a thread.
              </div>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="font-semibold text-gray-900">
                Where is my API key stored?
              </div>
              <div className="mt-2">
                Locally in extension storage. You can clear it anytime.
              </div>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="font-semibold text-gray-900">
                What does the model receive?
              </div>
              <div className="mt-2">
                Masked text only, with consistent placeholders.
              </div>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="font-semibold text-gray-900">
                Does Add label change Gmail?
              </div>
              <div className="mt-2">
                Yes. Labels are applied via Gmail API after you click.
              </div>
            </div>
            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="font-semibold text-gray-900">
                Can it send emails for me?
              </div>
              <div className="mt-2">
                No. Only drafts and inserts text into the reply box.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative w-full pb-20 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white bg-white/70 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Contact and Credits
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Built for privacy-first inbox workflows. Open-source friendly.
                Feedback welcome.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-600">
              <a
                href="https://github.com/IncogAgent-Dev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900"
              >
                GitHub
              </a>
              <a href="#contact" className="hover:text-gray-900">
                Report an Issue
              </a>
              <a href="#contact" className="hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
