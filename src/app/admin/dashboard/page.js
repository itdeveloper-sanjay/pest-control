"use client";
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '../../../config/routes';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push(APP_ROUTES.ADMIN_LOGIN);
  };

  return (
    <div className="flex-1 w-full bg-brand-bg-main min-h-[80vh]">
      {/* Dashboard Topbar */}
      <div className="bg-brand-primary-hover text-white shadow-md p-4 px-8 flex justify-between items-center rounded-b-xl mx-4 mt-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition-colors text-sm font-medium cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto p-8 mt-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border-default mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-primary">Welcome, Admin!</h2>
          <p className="text-brand-text-secondary">
            This is your secure dashboard. You can add more fields, forms, and management tables here later.
          </p>
        </div>

        {/* Placeholder Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border-default">
            <h3 className="text-lg font-medium text-brand-text-primary mb-2">Total Inquiries</h3>
            <p className="text-3xl font-bold text-brand-primary">124</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border-default">
            <h3 className="text-lg font-medium text-brand-text-primary mb-2">Active Products</h3>
            <p className="text-3xl font-bold text-brand-primary">18</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border-default">
            <h3 className="text-lg font-medium text-brand-text-primary mb-2">New Quotes</h3>
            <p className="text-3xl font-bold text-brand-primary">7</p>
          </div>
        </div>

        {/* Future Form/Table area */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border-2 border-dashed border-brand-border-default min-h-[300px] flex items-center justify-center">
          <p className="text-brand-text-muted text-lg font-medium">Empty space for future fields / data tables</p>
        </div>
      </main>
    </div>
  );
}
