
import React, { useState } from 'react';

interface LandingProps {
  onSubmit: (data: any) => void;
  onOpenAdmin: () => void;
}

const LandingPage: React.FC<LandingProps> = ({ onSubmit, onOpenAdmin }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', description: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onSubmit(form);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Professional Header */}
      <nav className="px-6 py-6 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black">T</div>
          <span className="font-black text-xl tracking-tighter">TIRTH<span className="text-indigo-600">.</span></span>
        </div>
        <button 
          onClick={onOpenAdmin}
          className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
        >
          Admin Access
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Brand Intro */}
        <div className="space-y-8 mb-12 lg:mb-0 animate-in slide-in-from-left duration-700">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Hardware <br/> <span className="text-indigo-600">Engineering.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-sm leading-relaxed">
            Premium electronics solutions, PCB design, and firmware development. Submit your requirements to start.
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">PCB Design</div>
            <div className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">IoT</div>
            <div className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">Firmware</div>
          </div>
        </div>

        {/* Right: Submission Form */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-indigo-50 animate-in slide-in-from-right duration-700">
          <h2 className="text-2xl font-black mb-6">Inquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Name</label>
                <input 
                  required
                  className="w-full bg-white border-none rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Email</label>
                <input 
                  required
                  type="email"
                  className="w-full bg-white border-none rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Contact Number</label>
              <input 
                required
                className="w-full bg-white border-none rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                placeholder="+1 234 567 890"
                value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Work Description</label>
              <textarea 
                required
                className="w-full bg-white border-none rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-600 transition-all min-h-[140px]"
                placeholder="Describe your project requirements..."
                value={form.description}
                onChange={e => setForm({...form, description: e.target.value})}
              />
            </div>
            <button 
              disabled={loading}
              className="w-full bg-indigo-600 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>Submit Details <i className="fa-solid fa-arrow-right text-xs"></i></>
              )}
            </button>
          </form>
        </div>
      </main>

      <footer className="text-center py-12 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
        Tirth Solutions &copy; 2024 • Build for Mobile
      </footer>
    </div>
  );
};

export default LandingPage;
