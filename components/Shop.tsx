
import React, { useState } from 'react';
import { Product } from '../types';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from './Home';

interface ShopProps {
  onAddToCart: (p: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = MOCK_PRODUCTS.filter(p => 
    (activeCat === 'All' || p.category === activeCat) &&
    (p.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="px-4 space-y-4 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col gap-4 sticky top-0 bg-white z-40 py-2">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input 
            type="text"
            placeholder="Search components..."
            className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                activeCat === cat 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-20">
        {filtered.length > 0 ? (
          filtered.map(p => (
            <ProductCard key={p.id} product={p} onAdd={() => onAddToCart(p)} />
          ))
        ) : (
          <div className="col-span-2 py-12 text-center text-slate-400">
            <i className="fa-solid fa-box-open text-4xl mb-2"></i>
            <p className="text-sm">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
