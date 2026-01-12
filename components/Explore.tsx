
import React from 'react';
import { ProjectRequest, ProjectStatus } from '../types';

interface ExploreProps {
  projects: ProjectRequest[];
  onSelectProject: (p: ProjectRequest) => void;
}

const Explore: React.FC<ExploreProps> = ({ projects, onSelectProject }) => {
  const available = projects.filter(p => p.status === ProjectStatus.PENDING);

  return (
    <div className="p-5 space-y-6 animate-in slide-in-from-right duration-500">
      <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-100 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-black mb-1">Project Feed</h2>
          <p className="text-blue-100 text-xs">Browse open requests and earn rewards.</p>
        </div>
        <i className="fa-solid fa-bolt absolute -right-4 -bottom-4 text-7xl text-blue-500/30 rotate-12"></i>
      </div>

      <div className="space-y-4">
        {available.length === 0 ? (
          <p className="text-center text-slate-400 py-10">No open projects right now. Check back soon!</p>
        ) : (
          available.map(p => (
            <div 
              key={p.id} 
              onClick={() => onSelectProject(p)}
              className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-3"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-lg">{p.category}</span>
                <span className="font-black text-slate-800">${p.budget}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 leading-tight">{p.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-3">{p.description}</p>
              <div className="flex items-center gap-4 pt-4 text-[10px] font-bold text-slate-400">
                <span className="flex items-center gap-1"><i className="fa-solid fa-clock"></i> {p.deadline}</span>
                <span className="flex items-center gap-1"><i className="fa-solid fa-user"></i> {p.clientName}</span>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-2xl text-xs font-bold mt-2">
                View & Propose
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
