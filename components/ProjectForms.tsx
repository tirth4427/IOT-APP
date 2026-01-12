
import React, { useState } from 'react';
import { ProjectStatus, ViewState } from '../types';

export const CreateProjectForm: React.FC<{ onSubmit: (data: any) => void, onBack: () => void }> = ({ onSubmit, onBack }) => {
  const [form, setForm] = useState({ title: '', description: '', budget: '', deadline: '', category: 'Arduino' });

  return (
    <div className="p-6 space-y-6 animate-in slide-in-from-bottom duration-500">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600"><i className="fa-solid fa-arrow-left"></i></button>
        <h2 className="text-2xl font-black text-slate-900">Post Project</h2>
      </div>

      <div className="space-y-4">
        <Input label="Title" placeholder="e.g. Smart Garden IoT System" value={form.title} onChange={v => setForm({...form, title: v})} />
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Description</label>
          <textarea 
            className="w-full bg-white border border-slate-100 rounded-3xl p-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]" 
            placeholder="Detailed requirements..." 
            value={form.description}
            onChange={e => setForm({...form, description: e.target.value})}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Budget ($)" type="number" placeholder="500" value={form.budget} onChange={v => setForm({...form, budget: v})} />
          <Input label="Deadline" placeholder="2 Weeks" value={form.deadline} onChange={v => setForm({...form, deadline: v})} />
        </div>
        
        <button 
          onClick={() => onSubmit(form)}
          className="w-full bg-blue-600 text-white font-bold py-5 rounded-3xl shadow-xl shadow-blue-100 active:scale-95 transition-all mt-4"
        >
          Publish Request
        </button>
      </div>
    </div>
  );
};

const Input: React.FC<{ label: string, value: string, onChange: (v: string) => void, placeholder?: string, type?: string }> = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);
