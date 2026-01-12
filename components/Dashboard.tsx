
import React from 'react';
import { UserRole, ProjectRequest, ProjectStatus, ViewState } from '../types';

interface DashboardProps {
  role: UserRole;
  projects: ProjectRequest[];
  onSelectProject: (p: ProjectRequest) => void;
  onNavigate: (v: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ role, projects, onSelectProject, onNavigate }) => {
  const isClient = role === UserRole.CLIENT;
  
  // Filter projects relevant to the user
  const relevantProjects = isClient 
    ? projects.filter(p => p.status !== ProjectStatus.COMPLETED)
    : projects.filter(p => p.status === ProjectStatus.ACCEPTED || p.status === ProjectStatus.IN_PROGRESS);

  return (
    <div className="p-5 space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-slate-800">
          {isClient ? 'My Projects' : 'Active Tasks'}
        </h2>
        <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full">
          {relevantProjects.length} Active
        </span>
      </div>

      {relevantProjects.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border-2 border-dashed border-slate-200 space-y-4">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
            <i className="fa-solid fa-folder-open text-2xl"></i>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            {isClient ? "You haven't posted any requests yet." : "No active projects assigned to you."}
          </p>
          <button 
            onClick={() => onNavigate(isClient ? ViewState.PROJECT_CREATE : ViewState.EXPLORE)}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-lg shadow-blue-100"
          >
            {isClient ? 'Create First Project' : 'Find a Project'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {relevantProjects.map(p => (
            <div 
              key={p.id} 
              onClick={() => onSelectProject(p)}
              className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm active:scale-[0.98] transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase ${
                  p.status === ProjectStatus.PENDING ? 'bg-amber-50 text-amber-600' :
                  p.status === ProjectStatus.ACCEPTED ? 'bg-blue-50 text-blue-600' :
                  'bg-green-50 text-green-600'
                }`}>
                  {p.status.replace('_', ' ')}
                </span>
                <span className="font-bold text-slate-900">${p.budget}</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{p.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-3">{p.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[8px] text-slate-500">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{isClient ? 'Seeking Dev' : p.clientName}</span>
                </div>
                <span className="text-[10px] font-bold text-blue-600">{p.proposals.length} Proposals</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
