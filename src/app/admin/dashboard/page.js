"use client";
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'addressed'
  const [actionLoading, setActionLoading] = useState(null); // id of message being updated
  const [deleteModalId, setDeleteModalId] = useState(null); // id of message to delete

  useEffect(() => {
    fetchMessages(1, 'all', false);
  }, []);

  const fetchMessages = async (p, statusFilter, silent = false) => {
    if (!silent) setLoading(true);
    try {
      let url = `/api/admin/messages?page=${p}&limit=10`;
      if (statusFilter !== 'all') {
        url += `&status=${statusFilter}`;
      }
      
      const res = await fetch(url);
      const data = await res.json();
      if (data.messages) {
        setMessages(data.messages);
        setTotalPages(data.totalPages);
        setTotalMessages(data.total);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  const updateMessageStatus = async (id, currentStatus) => {
    setActionLoading(id);
    const newStatus = currentStatus === 'pending' ? 'addressed' : 'pending';
    
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (res.ok) {
        await fetchMessages(page, filter, true);
      } else {
        console.error("Failed to update status");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(null);
    }
  };

  const confirmDelete = (id) => {
    setDeleteModalId(id);
  };

  const deleteMessage = async () => {
    if (!deleteModalId) return;
    setActionLoading(deleteModalId);
    
    try {
      const res = await fetch(`/api/admin/messages/${deleteModalId}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        await fetchMessages(page, filter, true);
        setDeleteModalId(null);
      } else {
        console.error("Failed to delete message");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Dashboard Header & Stats */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Lead Messages</h2>
        <p className="text-gray-500">Manage and respond to your customer inquiries efficiently.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-border-default flex flex-col justify-center items-start">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Total {filter !== 'all' ? filter : ''} Leads</h3>
          <p className="text-4xl font-bold text-brand-primary">{loading ? '...' : totalMessages}</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-brand-border-default overflow-hidden flex flex-col">
        <div className="border-b border-brand-border-default bg-gray-50/50 pt-2 px-4 sm:px-6">
          <div className="flex space-x-6 overflow-x-auto">
            {[
              { id: 'all', label: 'All Leads' },
              { id: 'pending', label: 'Pending' },
              { id: 'addressed', label: 'Addressed' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { 
                  setFilter(tab.id); 
                  setPage(1); 
                  fetchMessages(1, tab.id, true);
                }}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  filter === tab.id
                    ? 'border-brand-primary text-brand-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Messages List */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-brand-border-default">
                <th className="p-4 pl-6 font-semibold w-1/4">Contact Details</th>
                <th className="p-4 font-semibold w-2/4">Message</th>
                <th className="p-4 font-semibold w-32">Status</th>
                <th className="p-4 pr-6 font-semibold text-right w-40">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border-default bg-white">
              {loading ? (
                <tr>
                  <td colSpan="4" className="p-12 text-center text-gray-500">
                    <svg className="animate-spin h-8 w-8 text-brand-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading leads...
                  </td>
                </tr>
              ) : messages.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                      <p className="text-lg font-medium text-gray-900 mb-1">No leads found</p>
                      <p className="text-sm">There are no {filter !== 'all' ? filter : ''} messages at the moment.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="p-4 pl-6 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-gray-900">{msg.name}</span>
                        <a href={`mailto:${msg.email}`} className="text-sm text-brand-primary hover:underline">{msg.email}</a>
                        <a href={`tel:${msg.phone}`} className="text-sm text-gray-500 hover:text-brand-primary">{msg.phone}</a>
                        <span className="text-xs text-gray-400 mt-1">{new Date(msg.createdAt).toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="p-4 align-top max-w-sm">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap break-words">{msg.message}</p>
                    </td>
                    <td className="p-4 align-top">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        msg.status === 'addressed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {msg.status === 'addressed' ? 'Addressed' : 'Pending'}
                      </span>
                    </td>
                    <td className="p-4 pr-6 align-top text-right">
                      <div className="flex flex-col items-end gap-2 transition-opacity">
                        <button 
                          onClick={() => updateMessageStatus(msg._id, msg.status || 'pending')}
                          disabled={actionLoading === msg._id}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md w-32 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-wait flex items-center justify-center ${
                            msg.status === 'addressed' 
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                              : 'bg-green-500 text-white hover:bg-green-600'
                          }`}
                        >
                          {actionLoading === msg._id ? (
                            <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          ) : msg.status === 'addressed' ? 'Mark Pending' : 'Mark Addressed'}
                        </button>
                        <button 
                          onClick={() => confirmDelete(msg._id)}
                          disabled={actionLoading === msg._id}
                          className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-md w-32 transition-colors disabled:opacity-70 disabled:cursor-wait"
                        >
                          Delete
                        </button>
                      </div>
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
            <span className="text-sm text-gray-500">
              Showing page <span className="font-medium text-gray-900">{page}</span> of <span className="font-medium text-gray-900">{totalPages}</span>
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  const newPage = Math.max(1, page - 1);
                  setPage(newPage);
                  fetchMessages(newPage, filter, true);
                }}
                disabled={page === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                Previous
              </button>
              <button 
                onClick={() => {
                  const newPage = Math.min(totalPages, page + 1);
                  setPage(newPage);
                  fetchMessages(newPage, filter, true);
                }}
                disabled={page === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom Delete Confirmation Modal */}
      {deleteModalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 transform transition-all">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4 mx-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Delete Lead?</h3>
            <p className="text-sm text-center text-gray-500 mb-6">
              Are you sure you want to delete this lead? This action cannot be undone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setDeleteModalId(null)}
                disabled={actionLoading === deleteModalId}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button 
                onClick={deleteMessage}
                disabled={actionLoading === deleteModalId}
                className="flex-1 flex justify-center items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {actionLoading === deleteModalId ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  'Yes, Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
