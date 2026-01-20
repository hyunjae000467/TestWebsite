
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
      {description}
    </p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">KEY FEATURES</h2>
          <p className="text-slate-500">우리는 본질에 집중합니다. 오직 당신의 회복만을 위해.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🛡️"
            title="검증된 전문가 칼럼"
            description="고학력자, 컨설턴트, TA 등 검증된 인원의 신뢰도 높은 칼럼을 제공합니다. 이제 믿을 수 없는 커뮤니티의 검증되지 않은 조언에 휘둘리지 마세요."
          />
          <FeatureCard 
            icon="🔍"
            title="유형별 맞춤 필터"
            description="인간관계, 번아웃, 자기효능감 저하 등 당신이 겪고 있는 슬럼프 유형에 최적화된 필터를 통해 본인에게 꼭 필요한 솔루션만을 스마트하게 찾아보세요."
          />
          <FeatureCard 
            icon="🤖"
            title="AI 스마트 요약 미리보기"
            description="글을 끝까지 읽지 않아도 AI가 핵심 내용을 미리 요약해 줍니다. 당신의 소중한 시간을 낭비하지 않도록, 클릭 전에 글의 가치를 먼저 확인하세요."
          />
        </div>
      </div>
    </section>
  );
};
