
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-xl font-bold tracking-tighter gradient-text">RE:START</span>
          <p className="mt-2 text-sm text-slate-400">당신의 성장이 멈추지 않도록, 우리가 함께합니다.</p>
        </div>
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">고객지원</a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} RE:START Team. All rights reserved. 
      </div>
    </div>
  );
};
