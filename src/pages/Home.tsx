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
        
        {/* 🛡️ Who We Are 区块 */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-gray-100">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Who We Are</h2>
              <p className="text-primary font-medium tracking-wide">IncogAgent™ Team</p>
            </div>
            <div className="text-5xl mt-4 sm:mt-0 opacity-80">🎓</div>
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
            <p className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
              Our team is currently developing a <strong className="text-primary font-bold">local-first data masking middleware</strong>. We are exploring architectures that can intelligently intercept, sanitize, and reconstruct sensitive contexts entirely on-device, ensuring that your secrets never reach the cloud.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}