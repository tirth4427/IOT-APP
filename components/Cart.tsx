
import React from 'react';
import { CartItem, ViewState } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-10 text-center space-y-4 animate-in fade-in">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
          <i className="fa-solid fa-cart-plus text-4xl"></i>
        </div>
        <h2 className="text-xl font-bold text-slate-800">Your cart is empty</h2>
        <p className="text-slate-500 text-sm">Looks like you haven't added any components to your project yet.</p>
      </div>
    );
  }

  return (
    <div className="px-4 space-y-6 animate-in slide-in-from-bottom duration-300 pb-32">
      <h2 className="text-xl font-bold text-slate-800 pt-2">My Basket</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex gap-4 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-slate-50" />
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                <p className="text-xs text-blue-600 font-semibold">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3 bg-slate-100 rounded-lg px-2 py-1">
                  <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-slate-500 hover:text-blue-600"><i className="fa-solid fa-minus text-[10px]"></i></button>
                  <span className="text-xs font-bold text-slate-800 w-4 text-center">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-slate-500 hover:text-blue-600"><i className="fa-solid fa-plus text-[10px]"></i></button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-400 p-1"><i className="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Total Amount</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button 
            onClick={onCheckout}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
