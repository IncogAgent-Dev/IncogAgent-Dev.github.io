import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Mail from './pages/Mail';
import Chat from './pages/Chat';

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      // 📱 手机端使用 px-3 py-1.5 text-xs，大屏 (sm) 恢复 px-4 py-2 text-sm
      // 🌙 增加了深色模式的悬浮和选中状态
      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-primary/10 text-primary dark:bg-blue-900/30 dark:text-blue-400 shadow-sm' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    <HashRouter>
      {/* 🌙 全局背景增加 dark:bg-gray-900 */}
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-gray-900 font-sans text-gray-900 flex flex-col relative overflow-hidden transition-colors duration-300">
        
        {/* ✨ 优化后的毛玻璃导航栏 */}
        {/* 🌙 增加了 dark:bg-gray-900/60 和 dark:border-gray-800 */}
        <nav className="fixed top-0 w-full z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              
              {/* Logo 区域 */}
              <div className="flex-shrink-0 flex items-center">
                {/* 📱 手机端稍微减小字号 text-base，大屏恢复 text-xl */}
                <Link to="/" className="text-lg sm:text-xl font-extrabold tracking-tighter text-gray-900 dark:text-white flex items-center group">
                  <img
                    src="/image.png"
                    alt="IncogAgent"
                    // 📱 手机端稍微缩小 Logo 尺寸 (h-5 w-5)
                    className="mr-1.5 sm:mr-2 h-5 w-5 sm:h-6 sm:w-6 object-contain group-hover:rotate-12 transition-transform duration-300 dark:invert dark:opacity-90"
                  />
                  Incog<span className="text-primary dark:text-blue-400">Agent™</span>
                  {/* 📱 手机端隐藏 Dev 标签 (hidden sm:inline-block) 为右侧按钮腾出空间 */}
                  <span className="hidden sm:inline-block text-xs font-medium px-2 py-0.5 ml-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700">
                    Dev
                  </span>
                </Link>
              </div>

              {/* 导航链接区域 */}
              {/* 📱 手机端减小按钮间距 (space-x-1) */}
              <div className="flex space-x-1 sm:space-x-2 bg-white/50 dark:bg-gray-800/50 p-1 rounded-full border border-gray-100 dark:border-gray-700/50 shadow-sm">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/chat">Chat</NavLink>
              </div>

            </div>
          </div>
        </nav>

        <main className="pt-16 flex-grow flex flex-col relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;