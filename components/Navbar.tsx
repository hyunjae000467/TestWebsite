
import React from 'react';

interface NavbarProps {
  onNoticeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNoticeClick }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter gradient-text">RE:START</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onNoticeClick}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              공지사항
            </button>
            <a 
              href="https://restartmindbeta.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors font-bold"
            >
              사이트 미리보기
            </a>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">주요 기능</a>
            <a href="#register" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">사전 예약</a>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onNoticeClick}
              className="md:hidden text-xs font-bold text-blue-600 px-3 py-1 bg-blue-50 rounded-full"
            >
              공지
            </button>
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
