"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '../../../config/routes';

export default function AdminDashboard() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  const fetchMessages = async (p) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/messages?page=${p}&limit=10`);
      const data = await res.json();
      if (data.messages) {
        setMessages(data.messages);
        setTotalPages(data.totalPages);
        setTotalMessages(data.total);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

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
            Here you can view all inquiries submitted through the contact form.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border-default">
            <h3 className="text-lg font-medium text-brand-text-primary mb-2">Total Inquiries</h3>
            <p className="text-3xl font-bold text-brand-primary">{loading ? '...' : totalMessages}</p>
          </div>
        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-xl shadow-sm border border-brand-border-default overflow-hidden">
          <div className="p-6 border-b border-brand-border-default bg-gray-50 flex justify-between items-center">
            <h3 className="text-xl font-bold text-brand-text-primary">Contact Messages</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-brand-text-secondary text-sm uppercase tracking-wider border-b border-brand-border-default">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Contact Info</th>
                  <th className="p-4 font-semibold">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border-default">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-brand-text-secondary">
                      <svg className="animate-spin h-8 w-8 text-brand-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading messages...
                    </td>
                  </tr>
                ) : messages.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-brand-text-secondary">
                      No messages found.
                    </td>
                  </tr>
                ) : (
                  messages.map((msg) => (
                    <tr key={msg._id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm whitespace-nowrap">
                        {new Date(msg.createdAt).toLocaleString()}
                      </td>
                      <td className="p-4 text-sm font-medium text-brand-text-primary">
                        {msg.name}
                      </td>
                      <td className="p-4 text-sm">
                        <div className="flex flex-col gap-1">
                          <a href={`mailto:${msg.email}`} className="text-brand-primary hover:underline">{msg.email}</a>
                          <a href={`tel:${msg.phone}`} className="text-gray-600 hover:text-brand-primary">{msg.phone}</a>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 max-w-xs">
                        <p className="line-clamp-3" title={msg.message}>{msg.message}</p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="p-4 border-t border-brand-border-default flex items-center justify-between bg-gray-50">
              <span className="text-sm text-brand-text-secondary">
                Showing page <span className="font-medium text-brand-text-primary">{page}</span> of <span className="font-medium text-brand-text-primary">{totalPages}</span>
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-brand-border-default rounded-md text-sm font-medium bg-white text-brand-text-primary hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <button 
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 border border-brand-border-default rounded-md text-sm font-medium bg-white text-brand-text-primary hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
