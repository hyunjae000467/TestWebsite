
import React from 'react';

interface NoticePopupProps {
  onClose: () => void;
}

export const NoticePopup: React.FC<NoticePopupProps> = ({ onClose }) => {
  const handleDismissForever = () => {
    localStorage.setItem('restart_notice_dismissed', 'true');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        <div className="p-8 sm:p-10">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">
            📢
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">
            팀 리스타트(RE:START)에서 전해드립니다
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              안녕하세요! 슬럼프 극복 칼럼 공유 플랫폼을 개발하고 있는 
              <span className="text-blue-600 font-bold"> 대학생 연합 창업 프로젝트팀</span>입니다.
            </p>
            <p>
              우리는 검증된 경험자와 전문가의 칼럼만을 엄선하여 제공합니다. 
              유형별 맞춤 필터와 AI 요약을 통해, 당신에게 꼭 맞는 성장의 실마리를 찾아보세요.
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium italic">
              "공부가 잘 안 풀릴 때 조언 받을 곳이 필요하다면 지금 바로 사전예약해주세요!"
            </p>
          </div>
        </div>
        
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDismissForever}
            className="flex-1 px-6 py-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors text-center"
          >
            다시 보지 않기
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            확인했습니다
          </button>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
