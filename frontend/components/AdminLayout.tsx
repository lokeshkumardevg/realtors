import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Box, 
  Activity, 
  Settings, 
  Bell, 
  Search, 
  Menu,
  LogOut
} from 'lucide-react';
import Logo from './Logo';

export default function AdminLayout({ children, title = "Admin Panel" }: { children: React.ReactNode, title?: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    // Dummy logout
    router.push('/login');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/admin' },
    { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
    { icon: Box, label: '3D Models', path: '/admin/models' },
    { icon: Activity, label: 'Drone Logs', path: '/admin/logs' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' }
  ];

  return (
    <>
      <Head>
        <title>{title} - PGI Realtors</title>
      </Head>
      
      <div className="min-h-screen bg-stone-100 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 font-sans flex overflow-hidden">
        
        {/* SIDEBAR */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} flex-shrink-0 transition-all duration-300 bg-white dark:bg-black border-r border-gray-200 dark:border-white/10 flex flex-col z-20 shadow-xl`}>
          <div className="h-20 flex items-center justify-between px-4 border-b border-gray-200 dark:border-white/10">
            {sidebarOpen && (
              <div className="transform scale-75 origin-left cursor-pointer" onClick={() => router.push('/')}>
                <Logo />
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 transition-colors mx-auto">
              <Menu className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto scrollbar-hide">
            {navItems.map((item, idx) => {
              const isActive = router.pathname === item.path;
              return (
                <button 
                  key={idx} 
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span className="truncate">{item.label}</span>}
                </button>
              )
            })}
          </nav>
          
          <div className="p-4 border-t border-gray-200 dark:border-white/10">
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          
          {/* TOP APP BAR */}
          <header className="h-20 bg-white/80 dark:bg-black/50 backdrop-blur-md border-b border-gray-200 dark:border-white/10 flex items-center justify-between px-8 z-10 shrink-0">
            <div className="relative w-96 hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search projects, scans, or coordinates..." 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="flex items-center gap-4 ml-auto">
              <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-2"></div>
              <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" />
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-bold leading-tight text-gray-900 dark:text-white">Lokesh Kumar</p>
                  <p className="text-[10px] text-gray-500">Site Engineer</p>
                </div>
              </button>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="flex-1 overflow-y-auto p-8 scrollbar-hide">
            {children}
            <div className="h-12"></div> {/* Bottom Padding */}
          </main>
        </div>
      </div>
    </>
  );
}
