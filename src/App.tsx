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
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-primary/10 text-primary shadow-sm' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 flex flex-col relative overflow-hidden">
        
        {/* ✨ 优化后的毛玻璃导航栏 */}
        {/* bg-white/60 让它更透，backdrop-blur-xl 增加模糊强度，border-white/50 增加边缘光泽 */}
        <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-extrabold tracking-tighter text-gray-900 flex items-center group">
                  <span className="mr-2 group-hover:rotate-12 transition-transform duration-300">🛡️</span> 
                  Incog<span className="text-primary">Agent™</span>
                  <span className="text-xs font-medium px-2 py-0.5 ml-2 bg-gray-100 text-gray-500 rounded-full border border-gray-200">Dev</span>
                </Link>
              </div>
              <div className="flex space-x-2 bg-white/50 p-1 rounded-full border border-gray-100 shadow-sm">
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
