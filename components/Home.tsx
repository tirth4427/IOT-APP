
import React from 'react';
import { Product, ViewState } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart }) => {
  return (
    <div className="px-4 space-y-8 animate-in fade-in duration-500">
      {/* Hero Banner */}
      <section className="relative h-48 rounded-2xl overflow-hidden shadow-lg mt-2">
        <img 
          src="https://picsum.photos/seed/tech/800/400" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex flex-col justify-center px-6 text-white">
          <h2 className="text-2xl font-bold leading-tight">From Components<br/>To Creations</h2>
          <p className="text-blue-100 text-sm mt-2 font-medium">Build • Learn • Innovate</p>
          <button 
            onClick={() => onNavigate(ViewState.SHOP)}
            className="mt-4 bg-white text-blue-900 px-4 py-2 rounded-lg text-xs font-bold w-fit shadow-md active:scale-95 transition-transform"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800">Popular Categories</h3>
          <button className="text-blue-600 text-xs font-semibold">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Arduino', 'Sensors', 'Modules', 'Displays'].map((cat) => (
            <div key={cat} className="flex flex-col items-center gap-2 min-w-[70px]">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 text-xl shadow-sm border border-slate-200">
                <i className={`fa-solid ${cat === 'Arduino' ? 'fa-microchip' : cat === 'Sensors' ? 'fa-satellite' : 'fa-cubes'}`}></i>
              </div>
              <span className="text-[11px] font-medium text-slate-500">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="pb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800">Recommended for You</h3>
          <button onClick={() => onNavigate(ViewState.SHOP)} className="text-blue-600 text-xs font-semibold">View More</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {MOCK_PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} onAdd={() => onAddToCart(product)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export const ProductCard: React.FC<{ product: Product; onAdd: () => void }> = ({ product, onAdd }) => (
  <div className="bg-white rounded-2xl border border-slate-100 p-3 shadow-sm flex flex-col gap-2">
    <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      <button className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-slate-400 hover:text-red-500 transition-colors">
        <i className="fa-regular fa-heart"></i>
      </button>
    </div>
    <div className="flex flex-col flex-1">
      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{product.category}</span>
      <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{product.name}</h4>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-bold text-slate-900">${product.price.toFixed(2)}</span>
        <button 
          onClick={onAdd}
          className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center active:scale-90 transition-transform shadow-sm"
        >
          <i className="fa-solid fa-plus text-xs"></i>
        </button>
      </div>
    </div>
  </div>
);

export default Home;
