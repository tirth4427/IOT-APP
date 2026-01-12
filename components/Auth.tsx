
import React, { useState } from 'react';
import { ViewState, UserRole } from '../types';

interface AuthProps {
  // Use ViewState enum values directly for mode type
  mode: ViewState.LOGIN | ViewState.REGISTER;
  onSuccess: () => void;
  onSwitch: (view: ViewState) => void;
  roleCallback: (name: string, role: UserRole) => void;
}

const Auth: React.FC<AuthProps> = ({ mode, roleCallback }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.CLIENT);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      roleCallback(name || 'Anonymous User', role);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col px-8 py-12 bg-white relative overflow-hidden animate-in fade-in duration-700">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="mb-10 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-4xl font-black mx-auto mb-6 shadow-2xl shadow-blue-200">T</div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Tirth Hub</h1>
          <p className="text-slate-500 mt-2 font-medium">Marketplace for Innovation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Ex. John Doe" 
              required
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Select Your Role</label>
            <div className="grid grid-cols-2 gap-3">
              <RoleCard 
                active={role === UserRole.CLIENT} 
                icon="fa-briefcase" 
                label="Client" 
                sub="I need work done" 
                onClick={() => setRole(UserRole.CLIENT)} 
              />
              <RoleCard 
                active={role === UserRole.DEVELOPER} 
                icon="fa-code" 
                label="Expert" 
                sub="I want to work" 
                onClick={() => setRole(UserRole.DEVELOPER)} 
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-black py-5 rounded-3xl mt-4 shadow-xl shadow-blue-200 active:scale-95 transition-all flex items-center justify-center"
          >
            {loading ? <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div> : 'Get Started'}
          </button>
        </form>
      </div>
    </div>
  );
};

const RoleCard: React.FC<{ active: boolean, icon: string, label: string, sub: string, onClick: () => void }> = ({ active, icon, label, sub, onClick }) => (
  <div 
    onClick={onClick}
    className={`p-4 rounded-3xl border-2 transition-all cursor-pointer ${
      active ? 'bg-blue-50 border-blue-600' : 'bg-white border-slate-100'
    }`}
  >
    <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
      <i className={`fa-solid ${icon} text-xs`}></i>
    </div>
    <p className={`text-xs font-black ${active ? 'text-blue-900' : 'text-slate-700'}`}>{label}</p>
    <p className={`text-[9px] font-bold ${active ? 'text-blue-400' : 'text-slate-400'}`}>{sub}</p>
  </div>
);

export default Auth;
