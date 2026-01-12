
import React, { useState, useEffect } from 'react';
import { ViewState, ActivityLog } from './types';
import PublicPortal from './components/PublicPortal';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LANDING);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Load logs from localStorage to persist data across mobile sessions
  useEffect(() => {
    const savedLogs = localStorage.getItem('tirth_activity_logs');
    if (savedLogs) {
      setLogs(JSON.parse(savedLogs));
    }
    
    // Log initial app open
    logActivity('App Open', 'User entered main portal');
  }, []);

  const logActivity = (action: string, details: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const newLog: ActivityLog = {
      id: Math.random().toString(36).substr(2, 9),
      action,
      details,
      device: isMobile ? 'Mobile' : 'Desktop',
      timestamp: new Date().toLocaleString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        day: '2-digit',
        month: 'short'
      }),
    };
    
    setLogs(prev => {
      const updated = [newLog, ...prev].slice(0, 100); // Keep last 100 logs
      localStorage.setItem('tirth_activity_logs', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearLogs = () => {
    if (window.confirm('Clear all activity history?')) {
      setLogs([]);
      localStorage.removeItem('tirth_activity_logs');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      {view === ViewState.LANDING && (
        <PublicPortal 
          onLog={logActivity}
          onAdminLink={() => setView(ViewState.ADMIN_LOGIN)} 
        />
      )}

      {view === ViewState.ADMIN_LOGIN && (
        <AdminLogin 
          onLoginSuccess={() => { setIsAdminAuthenticated(true); setView(ViewState.ADMIN_DASHBOARD); }}
          onBack={() => setView(ViewState.LANDING)}
        />
      )}

      {view === ViewState.ADMIN_DASHBOARD && isAdminAuthenticated && (
        <AdminDashboard 
          logs={logs} 
          onClear={handleClearLogs}
          onLogout={() => { setIsAdminAuthenticated(false); setView(ViewState.LANDING); }}
        />
      )}
    </div>
  );
};

export default App;
