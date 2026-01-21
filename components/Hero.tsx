
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8">
          🎉 RE:START 런칭 준비 중
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-8">
          "슬럼프 극복 칼럼 공유 플랫폼"
          <br />
          <span className="gradient-text italic">당신은 성장하는 중입니다.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
          슬럼프는 개인의 결함이 아닌, 더 높이 뛰어오르기 위한 소중한 과정입니다.<br className="hidden sm:block" />
          당신의 속도에 맞춰, 내 마음이 가는 글부터 하나씩 읽어보세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://restartmindbeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2 group"
          >
            <span>사이트 미리보기</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a 
            href="#register"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            지금 바로 사전예약
          </a>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-0 opacity-20 pointer-events-none">
        <div className="w-[800px] h-[600px] bg-blue-400 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};
