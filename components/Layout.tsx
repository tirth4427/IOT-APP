
import React from 'react';
import { ViewState, UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewState;
  onNavigate: (view: ViewState) => void;
  role: UserRole | null;
  userName: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onNavigate, role, userName }) => {
  // Use ViewState properties defined in types.ts
  if (activeView === ViewState.AUTH) return <>{children}</>;

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-slate-50 shadow-2xl relative overflow-hidden">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-5 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            {role === UserRole.CLIENT ? 'Client Portal' : 'Expert Panel'}
          </span>
          <h1 className="text-lg font-black text-slate-900 leading-tight">TIRTH<span className="text-blue-600">.</span></h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-blue-600 transition-colors"><i className="fa-solid fa-bell"></i></button>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs" onClick={() => onNavigate(ViewState.PROFILE)}>
            {userName.charAt(0)}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-100 flex justify-around items-center py-3 px-6 safe-area-bottom z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <NavItem 
          icon="fa-house" 
          label="Home" 
          active={activeView === ViewState.HOME} 
          onClick={() => onNavigate(ViewState.HOME)} 
        />
        {role === UserRole.DEVELOPER ? (
          <NavItem 
            icon="fa-magnifying-glass" 
            label="Explore" 
            active={activeView === ViewState.EXPLORE} 
            onClick={() => onNavigate(ViewState.EXPLORE)} 
          />
        ) : (
          <NavItem 
            icon="fa-plus-circle" 
            label="Post" 
            active={activeView === ViewState.PROJECT_CREATE} 
            onClick={() => onNavigate(ViewState.PROJECT_CREATE)} 
          />
        )}
        <NavItem 
          icon="fa-message" 
          label="Chats" 
          active={activeView === ViewState.CHAT} 
          onClick={() => onNavigate(ViewState.CHAT)} 
        />
        <NavItem 
          icon="fa-user" 
          label="Profile" 
          active={activeView === ViewState.PROFILE} 
          onClick={() => onNavigate(ViewState.PROFILE)} 
        />
      </nav>
    </div>
  );
};

const NavItem: React.FC<{ icon: string; label: string; active: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-blue-600' : 'text-slate-400'}`}>
    <div className={`p-2 rounded-2xl transition-all ${active ? 'bg-blue-50' : 'bg-transparent'}`}>
      <i className={`fa-solid ${icon} text-lg`}></i>
    </div>
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export default Layout;
