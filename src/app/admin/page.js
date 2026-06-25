"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '../../config/routes';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (username === 'admin' && password === 'admin123') {
      router.push(APP_ROUTES.ADMIN_DASHBOARD);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex-1 w-full flex items-center justify-center bg-brand-bg-main py-20 px-4">
      <div className="bg-brand-bg-card p-8 rounded-2xl shadow-md border border-brand-border-default w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-brand-text-primary">Admin Login</h1>
        
        {error && (
          <div className="bg-brand-status-error/10 text-brand-status-error p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-text-primary mb-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-white" 
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text-primary mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-white" 
              placeholder="Enter password"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-md hover:bg-brand-primary-hover transition-colors mt-2 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-brand-text-secondary">
          <p>Hint: Use <strong>admin</strong> / <strong>admin123</strong></p>
        </div>
      </div>
    </div>
  );
}
