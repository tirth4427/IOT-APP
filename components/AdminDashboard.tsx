
import React from 'react';
import { ActivityLog } from '../types';

interface DashboardProps {
  logs: ActivityLog[];
  onClear: () => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<DashboardProps> = ({ logs, onClear, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black">TM</div>
          <div>
            <h1 className="text-sm font-black leading-none">Telemetry Monitor</h1>
            <p className="text-[9px] text-indigo-400 font-bold uppercase tracking-widest mt-1">Status: Online</p>
          </div>
        </div>
        <button onClick={onLogout} className="text-slate-400 hover:text-white transition-colors">
          <i className="fa-solid fa-power-off"></i>
        </button>
      </nav>

      <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Total Actions</p>
            <p className="text-3xl font-black text-slate-900">{logs.length}</p>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Last Sync</p>
            <p className="text-xs font-black text-indigo-600 uppercase">{logs[0]?.timestamp.split(',')[1] || 'None'}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-black text-slate-800">Live Activity Feed</h2>
          <button 
            onClick={onClear}
            className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 px-4 py-2 rounded-full transition-all"
          >
            Clear Data
          </button>
        </div>

        {/* Activity Logs List */}
        <div className="space-y-3">
          {logs.length === 0 ? (
            <div className="py-20 text-center space-y-4 bg-white rounded-[2.5rem] border border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200 text-2xl">
                <i className="fa-solid fa-radar"></i>
              </div>
              <p className="text-slate-400 text-sm font-bold">Waiting for user interaction...</p>
            </div>
          ) : (
            logs.map(log => (
              <div key={log.id} className="bg-white rounded-[1.5rem] p-5 border border-slate-200 shadow-sm flex items-start gap-4 animate-in slide-in-from-bottom duration-300">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  log.action === 'App Open' ? 'bg-indigo-100 text-indigo-600' :
                  log.action === 'Product View' ? 'bg-blue-100 text-blue-600' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  <i className={`fa-solid ${
                    log.action === 'App Open' ? 'fa-door-open' :
                    log.action === 'Product View' ? 'fa-eye' :
                    'fa-bolt'
                  } text-sm`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-black text-slate-900 text-sm truncate">{log.action}</h3>
                    <span className="text-[9px] font-black text-slate-300 uppercase whitespace-nowrap ml-2">{log.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-2">{log.details}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-slate-50 text-[9px] font-black text-slate-400 uppercase rounded border border-slate-100">
                      <i className={`fa-solid ${log.device === 'Mobile' ? 'fa-mobile-screen' : 'fa-laptop'} mr-1`}></i>
                      {log.device}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
