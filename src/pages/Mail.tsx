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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* 左侧：文案与按钮 (保持不变，略调宽度占比) */}
            <div className="flex-1 max-w-2xl lg:max-w-xl xl:max-w-2xl z-10">
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight leading-tight">
                IncogAgent™ Mail:
                <span className="mt-2 block text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 tracking-normal">
                  Private AI inside Gmail.
                </span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-gray-500 font-light leading-relaxed">
                Hover for instant summaries. Draft replies faster.
                <br />
                Sensitive data is masked before any model call.
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span><span className="font-semibold text-gray-700">Privacy-first:</span> identifiers are masked locally before requests.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  <span><span className="font-semibold text-gray-700">No auto-send:</span> we never send emails for you.</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://github.com/IncogAgent-Dev/IncogAgent-Mail/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full sm:w-auto items-center justify-center rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/30 hover:bg-gray-800 ring-1 ring-gray-900"
                >
                  <svg className="mr-2.5 h-5 w-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Release
                </a>
                
                <a
                  href="/mail/SETUP_GUIDE.html"
                  className="group flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-200 bg-white/50 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:text-gray-900 hover:shadow-md"
                >
                  <svg className="mr-2.5 h-5 w-5 text-gray-400 transition-transform group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Setup Guide
                </a>
              </div>

              <div className="mt-12 text-xs uppercase tracking-[0.35em] text-gray-400 flex items-center gap-3">
                Scroll to see it in action
                <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* 右侧：玻璃拟物风 UI Mockup */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none mx-auto relative z-10 hidden md:block">
              {/* 装饰性背景光晕 */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-[2rem] blur-xl opacity-50 animate-pulse-slow"></div>
              
              {/* 主卡片 */}
              <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/80 dark:border-gray-700/50 shadow-2xl rounded-3xl p-6 overflow-hidden">
                
                {/* 伪装的浏览器头部 */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/90"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/90"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/90"></div>
                  </div>
                  <div className="ml-4 px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-md text-xs font-mono text-gray-400 flex-1 flex items-center">
                    <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    mail.google.com
                  </div>
                </div>

                {/* 伪装的邮件列表与总结悬浮窗 */}
                <div className="space-y-4">
                  {/* 邮件项 1 */}
                  <div className="relative p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-sm border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">Q3 Partnership Agreement</h4>
                        <p className="text-xs text-gray-500 mt-0.5">From: Legal Team</p>
                      </div>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                        <span className="mr-1">✨</span> Hovered
                      </span>
                    </div>
                    
                    {/* IncogAgent 总结面板 */}
                    <div className="mt-3 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-md"></div>
                      <div className="pl-4 py-3 pr-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-xl border border-blue-100/50 dark:border-blue-800/30 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p className="mb-2 font-medium text-gray-900 dark:text-gray-200">AI Summary (Masked):</p>
                        The contract with <span className="inline-block px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-mono text-xs border border-blue-200 dark:border-blue-700 mx-0.5">{"{{ORG_1}}"}</span> has been updated. Please send the wire transfer of <span className="inline-block px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-mono text-xs border border-green-200 dark:border-green-800/50 mx-0.5">{"{{MONEY_1}}"}</span> to <span className="inline-block px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 font-mono text-xs border border-purple-200 dark:border-purple-800/50 mx-0.5">{"{{PERSON_1}}"}</span> by Friday.
                      </div>
                    </div>
                  </div>

                  {/* 邮件项 2 (模糊作为背景) */}
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-gray-800/40 border border-gray-100/50 dark:border-gray-700/50 opacity-60">
                    <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="w-1/3 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

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
                href="https://github.com/IncogAgent-Dev/IncogAgent-Mail"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900"
              >
                GitHub
              </a>
              <a
                href="https://github.com/IncogAgent-Dev/IncogAgent-Mail/issues/new"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900"
              >
                Report an Issue
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
