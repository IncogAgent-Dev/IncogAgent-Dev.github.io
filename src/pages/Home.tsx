import InteractiveDemo from "../components/InteractiveDemo";

export default function Home() {
  return (
    // 移除了这里的 pb-24，解决底部留白过多的问题
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      
      {/* 🌌 环境光效背景 */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none dark:opacity-50"></div>
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none dark:opacity-50"></div>

      {/* 🚀 Hero Section (首屏视觉焦点) */}
      <section className="relative w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 tracking-tight mb-8 mail-fade-up">
          Secure the Prompt. <br className="hidden sm:block" />
          <span className="text-primary dark:text-blue-400">Unleash the Agent.</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mt-6 mail-fade-up" style={{ animationDelay: '100ms' }}>
          <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed italic">
            "Building the privacy layer for the GenAI era."
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 mail-fade-up" style={{ animationDelay: '200ms' }}>
          <a
            href="#/mail"
            className="group flex w-full sm:w-auto items-center justify-center rounded-full bg-gray-900 dark:bg-white px-8 py-3.5 text-sm font-semibold text-white dark:text-gray-900 shadow-lg shadow-gray-900/20 dark:shadow-white/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-100 ring-1 ring-gray-900 dark:ring-white"
          >
            Explore Mail
            <svg className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#/chat"
            className="group flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
          >
            Preview Chat
            <svg className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* 统一的卡片容器区 */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 lg:space-y-16">
        
        {/* Live Engine Demo */}
        <section className="relative w-full mail-fade-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">IncogAgent™ Live Engine Demo</h2>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Experience our local NLP masking pipeline in real-time.</p>
          </div>
          <InteractiveDemo />
        </section>

        {/* 🛡️ Who We Are 区块 */}
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white dark:border-gray-700/50 p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] mail-fade-up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-gray-100 dark:border-gray-700/50">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Who We Are</h2>
              <div className="flex items-center gap-3 text-primary dark:text-blue-400 font-medium tracking-wide">
                <span>IncogAgent™ Team</span>
              </div>
            </div>
            {/* 放大了 Duke Logo (h-16 到 sm:h-20) */}
            <div className="mt-6 sm:mt-0 opacity-90 flex-shrink-0 dark:bg-white/90 dark:px-4 dark:py-2 dark:rounded-xl transition-all">
              <img
                src="/duke_university_wordmark_navyblue_012169.svg"
                alt="Duke University"
                className="h-16 sm:h-20 w-auto"
              />
            </div>
          </div>
          
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              We are a team of four Computer Science undergraduates from <strong className="text-gray-900 dark:text-white font-bold">Duke University</strong> and <strong className="text-gray-900 dark:text-white font-bold">DKU</strong>.
            </p>
            <p>
              United by a shared passion for cybersecurity, natural language processing, and ethical AI, we are focused on bridging the gap between powerful cloud-based LLMs and strict user data privacy.
            </p>
          </div>
        </div>

        {/* 🎯 Our Focus 区块 */}
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white dark:border-gray-700/50 p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] mail-fade-up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-gray-100 dark:border-gray-700/50">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Our Focus: The Privacy Paradox</h2>
            </div>
            {/* 放大了 IncogAgent Logo (h-14 到 sm:h-16) */}
            <div className="mt-6 sm:mt-0 opacity-90 flex-shrink-0 dark:bg-gray-100 dark:px-3 dark:py-1.5 dark:rounded-xl">
              <img
                src="/image.png"
                alt="IncogAgent"
                className="h-14 sm:h-16 w-auto mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
          </div>
          
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              In an era where AI agents are becoming deeply integrated into our daily workflows, data privacy remains a critical bottleneck. We believe that users should <strong className="text-gray-900 dark:text-white font-bold">never have to trade their Personally Identifiable Information (PII)</strong> for AI-driven productivity.
            </p>
            <p>
              Our team is currently developing a <strong className="text-primary dark:text-blue-400 font-bold">local-first data masking middleware</strong>. We are exploring architectures that can intelligently intercept, sanitize, and reconstruct sensitive contexts entirely on-device, ensuring that your secrets never reach the cloud.
            </p>
          </div>
        </div>

      </section>

      {/* 底部 Footer 区域 (只保留 GitHub 按钮，更新文案，贴紧底部) */}
      <section id="contact" className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-16 z-10 mail-fade-up">
        <div className="rounded-3xl border border-white dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              IncogAgent™
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Building the privacy layer for the GenAI era. Developers of intelligent PII masking protocols that enable safe, private interactions with LLMs.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <a
              href="https://github.com/IncogAgent-Dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-3.5 text-sm font-semibold text-white dark:text-gray-900 shadow-lg shadow-gray-900/20 dark:shadow-white/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-100 ring-1 ring-gray-900 dark:ring-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub Organization
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}