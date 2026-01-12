
import React from 'react';
import { ViewState } from '../types';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="px-6 space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-4 py-4">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 active:scale-90 transition-transform">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h2 className="text-xl font-bold text-slate-800">About Us</h2>
      </div>

      <div className="space-y-4">
        <div className="p-5 bg-blue-50 rounded-3xl border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2">Our Mission</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            At Tirth Electronics, we are dedicated to providing the highest quality components for hobbyists, engineers, and students. Our goal is to empower innovation by making electronics accessible and affordable for everyone.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 px-2">The Tirth Journey</h3>
          <p className="text-sm text-slate-600 leading-relaxed px-2">
            Starting from a small workshop, we've grown into a major hub for electronic parts. We don't just sell components; we provide tutorials, support, and a platform for creators to showcase their work.
          </p>
          <img src="https://picsum.photos/seed/workshop/600/300" alt="Workshop" className="w-full h-40 object-cover rounded-2xl shadow-sm" />
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-3xl text-center space-y-2">
          <p className="text-xs text-slate-400">Founded with ❤️ in 2023</p>
          <p className="text-lg font-bold italic">Building the future, one component at a time.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
