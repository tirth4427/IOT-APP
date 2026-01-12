
import React from 'react';
import { ViewState } from '../types';

interface SettingsProps {
  onLogout: () => void;
  onNavigate: (view: ViewState) => void;
}

const Settings: React.FC<SettingsProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="px-4 space-y-6 animate-in slide-in-from-right duration-300">
      <h2 className="text-xl font-bold text-slate-800 pt-2">Account & More</h2>
      
      <div className="space-y-2">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-2">General</h3>
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          <SettingItem icon="fa-info-circle" label="About Tirth Electronics" onClick={() => onNavigate(ViewState.ABOUT)} />
          <SettingItem icon="fa-headset" label="Contact Support" />
          <SettingItem icon="fa-shield-halved" label="Privacy Policy" />
          <SettingItem icon="fa-file-lines" label="Terms of Service" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-2">Security</h3>
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          <SettingItem icon="fa-lock" label="Change Password" />
          <SettingItem icon="fa-bell" label="Notifications" />
          <SettingItem icon="fa-moon" label="Dark Mode" />
        </div>
      </div>

      <button 
        onClick={onLogout}
        className="w-full py-4 bg-red-50 text-red-600 font-bold rounded-2xl active:scale-95 transition-transform flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        Sign Out
      </button>

      <div className="text-center py-8">
        <p className="text-xs text-slate-400">v1.0.4-beta • Made with ❤️ for Makers</p>
      </div>
    </div>
  );
};

const SettingItem: React.FC<{ icon: string; label: string; onClick?: () => void }> = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full px-4 py-4 flex items-center justify-between hover:bg-slate-50 active:bg-slate-100 transition-colors border-b border-slate-50 last:border-none"
  >
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
        <i className={`fa-solid ${icon} text-sm`}></i>
      </div>
      <span className="text-sm font-semibold text-slate-700">{label}</span>
    </div>
    <i className="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
  </button>
);

export default Settings;
