
import React from 'react';

const MockupCard = ({ 
  badge, 
  subBadge, 
  date, 
  title, 
  hashtags, 
  points 
}: { 
  badge: string, 
  subBadge: string, 
  date: string, 
  title: string, 
  hashtags: string[], 
  points: string[] 
}) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-2">
        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded">{badge}</span>
        {subBadge && <span className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] font-medium rounded">{subBadge}</span>}
      </div>
      <span className="text-[10px] text-slate-300 font-mono">{date}</span>
    </div>
    
    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{title}</h3>
    
    <div className="flex flex-wrap gap-1 mb-6">
      {hashtags.map((tag, idx) => (
        <span key={idx} className="text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">#{tag}</span>
      ))}
    </div>

    <div className="bg-blue-50/50 rounded-xl p-4 mb-6 relative overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-xs">✨</span>
        <span className="text-xs font-bold text-blue-600">AI 요약</span>
      </div>
      {/* Skeleton / Pixelated text effect */}
      <div className="space-y-2 opacity-30">
        <div className="h-2 bg-blue-200 rounded w-full"></div>
        <div className="h-2 bg-blue-200 rounded w-5/6"></div>
        <div className="h-2 bg-blue-200 rounded w-4/6"></div>
        <div className="h-2 bg-blue-200 rounded w-11/12"></div>
      </div>
    </div>

    <div className="mt-auto">
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-xs">✍️</span>
        <span className="text-xs font-bold text-slate-600">글쓴이의 한마디</span>
      </div>
      <ul className="space-y-1">
        {points.map((pt, idx) => (
          <li key={idx} className="text-xs text-slate-500 flex items-start gap-1.5">
            <span className="mt-1.5 block w-1 h-1 rounded-full bg-slate-300 flex-shrink-0"></span>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Preview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <h2 className="text-xl font-bold text-slate-900">최신 칼럼 피드</h2>
          </div>
          <a 
            href="https://restartmindbeta.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1"
          >
            베타 버전 전체보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <MockupCard 
            badge="성적우수자"
            subBadge="서울대학교"
            date="2024-03-20"
            title="완벽한 계획이 독이 될 때: 실행의 힘"
            hashtags={["계획만 세우는 유형", "조언 중심"]}
            points={[
              "계획 수립에 너무 많은 에너지를 쏟지 마세요.",
              "작은 실행 하나가 완벽한 계획보다 낫습니다.",
              "어긋난 계획을 받아들이는 유연함이 필요합니다."
            ]}
          />
          <MockupCard 
            badge="재도전자"
            subBadge="연세대학교"
            date="2024-03-18"
            title="번아웃 끝에서 찾은 나만의 휴식법"
            hashtags={["과부하형", "공감 중심"]}
            points={[
              "휴식은 시간 낭비가 아닌 재충전의 과정입니다.",
              "죄책감 없는 온전한 쉼이 필요합니다.",
              "나의 한계를 인정하는 것부터 시작하세요."
            ]}
          />
          <MockupCard 
            badge="학습 상담 선생님"
            subBadge=""
            date="2024-03-22"
            title="성적이 멈췄을 때, 계단식 성장을 믿으세요"
            hashtags={["성적 정체형", "조언 중심", "공감 중심"]}
            points={[
              "정체기는 실력이 쌓이는 임계점의 구간입니다.",
              "방법을 바꾸기보다 꾸준함을 유지하세요.",
              "작은 성취를 기록하며 자신감을 회복하세요."
            ]}
          />
          <MockupCard 
            badge="TA/SA"
            subBadge="고려대학교"
            date="2024-03-25"
            title="왜 공부하는지 모르겠는 당신에게"
            hashtags={["목표 상실형", "보상 결핍형", "공감 중심"]}
            points={[
              "거창한 꿈보다 당장의 작은 호기심에 집중하세요.",
              "타인의 기준이 아닌 나의 속도를 찾으세요.",
              "공부는 나를 알아가는 과정 중 하나입니다."
            ]}
          />
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-slate-400 text-sm">※ 위 화면은 개발 중인 서비스의 실제 구동 예시입니다.</p>
          <div className="pt-4">
            <a 
              href="https://restartmindbeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 hover:border-blue-300 transition-all shadow-sm gap-2"
            >
              <span>실제 서비스 미리보기</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
