"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { APP_ROUTES } from '../../../config/routes';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    router.push(APP_ROUTES.ADMIN_LOGIN);
  };

  const navItems = [
    { name: 'Messages', href: APP_ROUTES.ADMIN_DASHBOARD, icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
  ];

  return (
    <div className="flex h-screen bg-brand-bg-main overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-brand-border-default transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-center h-20 bg-brand-primary border-b border-brand-primary-hover px-6">
          <Image 
            src="/logo-header.png" 
            alt="App Logo" 
            width={150} 
            height={50} 
            className="object-contain brightness-0 invert"
            priority
          />
        </div>
        <nav className="p-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'text-brand-text-secondary hover:bg-gray-100 hover:text-brand-text-primary'
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-20 px-6 bg-brand-primary border-b border-brand-primary-hover z-10">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white hover:text-gray-200 lg:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex-1 flex justify-center lg:hidden">
            <Image 
              src="/logo-header.png" 
              alt="App Logo" 
              width={120} 
              height={40} 
              className="object-contain brightness-0 invert"
              priority
            />
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <button 
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-brand-primary bg-white hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
