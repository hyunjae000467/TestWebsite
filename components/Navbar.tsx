
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter gradient-text">RE:START</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">주요 기능</a>
            <a href="#register" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">사전 예약</a>
          </div>
          <div>
            <a 
              href="#register" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all"
            >
              알림 받기
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
