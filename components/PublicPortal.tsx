
import React, { useState } from 'react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';

interface PublicProps {
  onLog: (action: string, details: string) => void;
  onAdminLink: () => void;
}

const PublicPortal: React.FC<PublicProps> = ({ onLog, onAdminLink }) => {
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');

  const handleCategoryChange = (cat: string) => {
    setActiveCat(cat);
    onLog('Filter Change', `Viewed category: ${cat}`);
  };

  const handleProductView = (name: string) => {
    onLog('Product View', `Examined details for: ${name}`);
  };

  const filtered = MOCK_PRODUCTS.filter(p => 
    (activeCat === 'All' || p.category === activeCat) &&
    (p.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Premium Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black shadow-lg shadow-indigo-100">T</div>
          <span className="font-black text-xl tracking-tighter">TIRTH<span className="text-indigo-600">.</span></span>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full p-6 space-y-8">
        {/* Hero Section */}
        <section className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-100">
          <div className="relative z-10 space-y-2">
            <h1 className="text-3xl font-black leading-tight">Innovation Hub</h1>
            <p className="text-indigo-100 text-sm max-w-[200px]">Explore the latest in hardware & embedded components.</p>
          </div>
          <i className="fa-solid fa-microchip absolute -right-4 -bottom-4 text-8xl text-indigo-500/30 rotate-12"></i>
        </section>

        {/* Categories Scroller */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border ${
                activeCat === cat 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                : 'bg-white text-slate-400 border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text"
            placeholder="Search component series..."
            className="w-full bg-slate-50 border-none rounded-2xl py-5 px-6 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if(e.target.value.length > 3) onLog('Search', `Searched for: ${e.target.value}`);
            }}
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-24">
          {filtered.map(p => (
            <div 
              key={p.id} 
              onClick={() => handleProductView(p.name)}
              className="bg-white rounded-[2rem] border border-slate-100 p-4 shadow-sm active:scale-95 transition-all group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{p.category}</span>
              <h3 className="text-sm font-bold text-slate-800 line-clamp-1 mt-1">{p.name}</h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs font-black text-slate-900">${p.price}</span>
                <div className="text-indigo-600 text-[10px] font-bold">Details <i className="fa-solid fa-arrow-right ml-1"></i></div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer / Invisible Admin Trigger */}
      <footer className="p-8 text-center space-y-4">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Tirth Solutions 2024</p>
        <button 
          onClick={onAdminLink}
          className="text-slate-200 text-[9px] hover:text-indigo-600 transition-colors uppercase tracking-widest font-bold"
        >
          System Access
        </button>
      </footer>
    </div>
  );
};

export default PublicPortal;
