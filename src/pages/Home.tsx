import InteractiveDemo from "../components/InteractiveDemo";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full pb-24">
      
      {/* 🌌 环境光效背景 (保持微妙的色彩，让毛玻璃质感生效) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-400/20 rounded-full mix-blend-multiply blur-[128px] pointer-events-none"></div>

      {/* 🚀 Hero Section (首屏视觉焦点) */}
      <section className="relative w-full pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight mb-8">
          Secure the Prompt. <br className="hidden sm:block" />
          <span className="text-primary">Unleash the Agent.</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mt-6">
          <p className="text-xl sm:text-2xl text-gray-500 font-light leading-relaxed italic">
            "Building the privacy layer for the GenAI era."
          </p>
        </div>
      </section>

      {/* 统一的卡片容器区 */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8">
        
        <section className="relative w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">IncogAgent™ Live Engine Demo</h2>
          </div>
          <InteractiveDemo />
        </section>

        {/* 🛡️ Who We Are 区块 */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-gray-100">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Who We Are</h2>
              <div className="flex items-center gap-3 text-primary font-medium tracking-wide">
                <span>IncogAgent™ Team</span>
                <a
                  href="https://github.com/IncogAgent-Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm uppercase tracking-widest text-gray-700 hover:text-gray-900"
                  aria-label="IncogAgent GitHub"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.38-3.37-1.38-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.33.68.97.68 1.96 0 1.41-.01 2.55-.01 2.9 0 .26.18.57.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 opacity-90 sm:ml-auto">
              <img
                src="/duke_university_wordmark_navyblue_012169.svg"
                alt="Duke University"
                className="h-35 w-auto"
              />
            </div>
          </div>
          
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              We are a team of four Computer Science undergraduates from <strong className="text-gray-900 font-bold">Duke University</strong> and <strong className="text-gray-900 font-bold">DKU</strong>.
            </p>
            <p>
              United by a shared passion for cybersecurity, natural language processing, and ethical AI, we are focused on bridging the gap between powerful cloud-based LLMs and strict user data privacy.
            </p>
          </div>
        </div>

        

        {/* 🎯 Our Focus 区块 */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-gray-100">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Our Focus: The Privacy Paradox</h2>
            </div>
            <div className="text-5xl mt-4 sm:mt-0 opacity-80">🎯</div>
          </div>
          
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              In an era where AI agents are becoming deeply integrated into our daily workflows, data privacy remains a critical bottleneck. We believe that users should <strong className="text-gray-900 font-bold">never have to trade their Personally Identifiable Information (PII)</strong> for AI-driven productivity.
            </p>
            <p>
              Our team is currently developing a <strong className="text-primary font-bold">local-first data masking middleware</strong>. We are exploring architectures that can intelligently intercept, sanitize, and reconstruct sensitive contexts entirely on-device, ensuring that your secrets never reach the cloud.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}