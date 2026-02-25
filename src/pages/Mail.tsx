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
    <div className="relative w-full flex-grow overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] bg-blue-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none dark:opacity-50" />
      <div className="absolute top-[20%] right-[-8%] w-[480px] h-[480px] bg-purple-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none dark:opacity-50" />
      <div className="absolute bottom-[-10%] left-[15%] w-[420px] h-[420px] bg-indigo-200/20 rounded-full mix-blend-multiply blur-[140px] pointer-events-none dark:opacity-30" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            <div className="flex-1 max-w-2xl lg:max-w-xl xl:max-w-2xl z-10">
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 tracking-tight leading-tight">
                IncogAgent™ Mail:
                <span className="mt-2 block text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-400 tracking-normal">
                  Private AI inside Gmail.
                </span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                Hover for instant summaries. Draft replies faster.
                <br />
                Sensitive data is masked before any model call.
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span><span className="font-semibold text-gray-700 dark:text-gray-200">Privacy-first:</span> identifiers are masked locally before requests.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  <span><span className="font-semibold text-gray-700 dark:text-gray-200">No auto-send:</span> we never send emails for you.</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://github.com/IncogAgent-Dev/IncogAgent-Mail/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full sm:w-auto items-center justify-center rounded-full bg-gray-900 dark:bg-white px-8 py-3.5 text-sm font-semibold text-white dark:text-gray-900 shadow-lg shadow-gray-900/20 dark:shadow-white/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/30 hover:bg-gray-800 dark:hover:bg-gray-100 ring-1 ring-gray-900 dark:ring-white"
                >
                  <svg className="mr-2.5 h-5 w-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Release
                </a>
                
                <a
                  href="/mail/SETUP_GUIDE.html"
                  className="group flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:shadow-md"
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

            <div className="flex-1 w-full max-w-lg lg:max-w-none mx-auto relative z-10 hidden md:block">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-[2rem] blur-xl opacity-50 animate-pulse-slow"></div>
              
              <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/80 dark:border-gray-700/50 shadow-2xl rounded-3xl p-6 overflow-hidden">
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

                <div className="space-y-4">
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
                    
                    <div className="mt-3 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-md"></div>
                      <div className="pl-4 py-3 pr-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-xl border border-blue-100/50 dark:border-blue-800/30 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p className="mb-2 font-medium text-gray-900 dark:text-gray-200">AI Summary (Masked):</p>
                        The contract with <span className="inline-block px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-mono text-xs border border-blue-200 dark:border-blue-700 mx-0.5">{"{{ORG_1}}"}</span> has been updated. Please send the wire transfer of <span className="inline-block px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-mono text-xs border border-green-200 dark:border-green-800/50 mx-0.5">{"{{MONEY_1}}"}</span> to <span className="inline-block px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 font-mono text-xs border border-purple-200 dark:border-purple-800/50 mx-0.5">{"{{PERSON_1}}"}</span> by Friday.
                      </div>
                    </div>
                  </div>

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

      {/* Features Content Blocks */}
      <section id="blocks" className="relative w-full py-10">
        {/*space-y-24*/}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {sections.map((section, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={section.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                <div className={`${isReversed ? "lg:order-2" : ""} mail-fade-up`}>
                  <div className="mb-6 h-1 w-12 bg-blue-500 rounded-full" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {section.value}
                  </p>

                  <ul className="mt-8 space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-2xl border border-white/50 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 dark:text-white min-w-[60px]">You see:</span>
                      <span>{section.youSee}</span>
                    </div>
                    <div className="mt-3 flex items-start gap-2">
                      <span className="font-semibold text-gray-900 dark:text-white min-w-[60px]">We do:</span>
                      <span>{section.weDo}</span>
                    </div>
                  </div>

                  {section.trust && (
                    <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      {section.trust}
                    </div>
                  )}
                  {section.note && (
                    <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 italic">
                      {section.note}
                    </div>
                  )}
                  {section.boundary && (
                    <div className="mt-5 text-sm font-semibold text-gray-900 dark:text-white border-l-2 border-amber-400 pl-3">
                      {section.boundary}
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    isReversed ? "lg:order-1" : ""
                  } mail-fade-up`}
                >
                  {/* 恢复了原先的边框和内边距，移除了多余的内层 border */}
                  <div className="rounded-3xl border border-white dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/50 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3">
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

      {/* Privacy Overview Section (Now enclosed in a sleek glass card) */}
      <section className="relative w-full py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100/50 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/40 to-indigo-50/20 dark:from-blue-900/10 dark:to-indigo-900/10 backdrop-blur-xl p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Privacy and Boundaries</h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Minimal context. Local-first. Always reversible.
                </p>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-4 text-base text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 p-6 sm:p-8 rounded-2xl border border-white/80 dark:border-gray-700/50">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Mask before model calls with no raw identifiers sent.
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    No auto-send. You confirm every action.
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Clear config and cache anytime.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative w-full py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">FAQ</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                Does it read my inbox automatically?
              </div>
              <div className="leading-relaxed">
                No. Summaries appear only when you hover a thread.
              </div>
            </div>
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                Where is my API key stored?
              </div>
              <div className="leading-relaxed">
                Locally in extension storage. You can clear it anytime.
              </div>
            </div>
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                What does the model receive?
              </div>
              <div className="leading-relaxed">
                Masked text only, with consistent placeholders.
              </div>
            </div>
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5">
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                Does Add label change Gmail?
              </div>
              <div className="leading-relaxed">
                Yes. Labels are applied via Gmail API after you click.
              </div>
            </div>
            <div className="group rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-white/5 md:col-span-2 lg:col-span-1">
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                Can it send emails for me?
              </div>
              <div className="leading-relaxed">
                No. Only drafts and inserts text into the reply box.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer Area */}
      <section id="contact" className="relative w-full pb-24 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Contact and Credits
              </h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                Built for privacy-first inbox workflows. Open-source and feedback welcome.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <a
                href="https://github.com/IncogAgent-Dev/IncogAgent-Mail"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-gray-900/50 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a
                href="https://github.com/IncogAgent-Dev/IncogAgent-Mail/issues/new"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-gray-900/50 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Report an Issue
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}