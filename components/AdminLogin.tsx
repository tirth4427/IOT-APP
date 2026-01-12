
import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess: () => void;
  onBack: () => void;
}

const AdminLogin: React.FC<LoginProps> = ({ onLoginSuccess, onBack }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple secure check - in a real app, this would be a server-side hash verification
    if (password === 'admin123') {
      onLoginSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-900 text-white">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-white font-black text-3xl mx-auto shadow-2xl">T</div>
          <h1 className="text-2xl font-black pt-4">Internal Admin Access</h1>
          <p className="text-slate-400 text-sm">Restricted to Tirth Electronics staff only.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input 
              autoFocus
              type="password"
              placeholder="Access Password"
              className={`w-full bg-slate-800 border-2 ${error ? 'border-red-500' : 'border-slate-700'} rounded-2xl px-6 py-5 outline-none focus:border-indigo-600 transition-all`}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs mt-2 font-bold animate-pulse text-center">Invalid Password</p>}
          </div>
          <button className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-900 active:scale-95 transition-all">
            Unlock Dashboard
          </button>
        </form>

        <button 
          onClick={onBack}
          className="w-full text-slate-500 text-sm font-bold hover:text-white transition-colors"
        >
          Return to Public Site
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
