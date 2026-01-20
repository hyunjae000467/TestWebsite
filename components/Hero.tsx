
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
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed mb-4">
          슬럼프는 개인의 결함이 아닌, 더 높이 뛰어오르기 위한 소중한 과정입니다.<br className="hidden sm:block" />
          당신의 속도에 맞춰, 내 마음이 가는 글부터 하나씩 읽어보세요.
        </p>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-0 opacity-20 pointer-events-none">
        <div className="w-[800px] h-[600px] bg-blue-400 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};
