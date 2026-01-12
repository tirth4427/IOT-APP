
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="px-4 space-y-8 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col items-center pt-8 gap-4">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/user/200/200" 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white">
            <i className="fa-solid fa-camera text-[10px]"></i>
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">John Maker</h2>
          <p className="text-sm text-slate-500">Hardware Enthusiast</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
          <span className="text-[10px] uppercase font-bold text-blue-200">Active Orders</span>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-2xl text-white shadow-lg shadow-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-400">Reward Points</span>
          <p className="text-2xl font-bold">450</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-slate-800">My Projects</h3>
        <div className="space-y-2">
          {['Smart Irrigation System', 'Weather Station 2.0'].map(p => (
            <div key={p} className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">{p}</h4>
                  <p className="text-[10px] text-slate-500 italic">Updated 2 days ago</p>
                </div>
              </div>
              <button className="text-blue-600 text-xs font-bold">Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
