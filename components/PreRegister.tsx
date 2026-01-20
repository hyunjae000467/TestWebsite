
import React from 'react';

interface PreRegisterProps {
  count: number;
  onRegisterClick: () => void;
}

export const PreRegister: React.FC<PreRegisterProps> = ({ count, onRegisterClick }) => {
  return (
    <section id="register" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">PRE-REGISTRATION</span>
          <h2 className="text-4xl font-bold mt-4 mb-6">지금, 새로운 시작을 예약하세요</h2>
          
          <div className="flex justify-center items-center gap-2 text-2xl font-mono mb-12">
            <span className="text-slate-400">현재</span>
            <div className="bg-white/10 px-4 py-2 rounded-lg text-blue-400 font-bold tracking-widest tabular-nums min-w-[5ch]">
              {count.toLocaleString()}
            </div>
            <span className="text-slate-400">명이 예약했습니다</span>
          </div>
        </div>

        <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 max-w-xl mx-auto shadow-2xl">
          <h3 className="text-xl font-medium mb-8">구글 폼을 통해 간편하게 신청하실 수 있습니다</h3>
          
          <button
            onClick={onRegisterClick}
            className="w-full py-5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3"
          >
            <span>사전예약 바로가기</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <p className="mt-8 text-slate-500 text-xs leading-relaxed">
            버튼을 누르면 외부 신청 페이지(Google Forms)로 이동합니다.<br />
            오픈 시 작성해주신 연락처로 가장 빠르게 알림을 보내드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};
