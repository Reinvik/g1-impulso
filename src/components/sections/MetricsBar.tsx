import React, { useState, useEffect, useRef } from 'react';
import { METRICS_DATA } from '../../data/content';
import { TrendingUp, Clock, DollarSign, Target } from 'lucide-react';

const ICONS = [
  <TrendingUp className="w-5 h-5 text-[#0066FF]" />,
  <Clock className="w-5 h-5 text-emerald-600" />,
  <DollarSign className="w-5 h-5 text-amber-500" />,
  <Target className="w-5 h-5 text-indigo-600" />
];

export const MetricsBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="metricas" ref={sectionRef} className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-6 sm:p-8 backdrop-blur-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {METRICS_DATA.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-start pt-4 sm:pt-0 ${index > 0 ? 'sm:pl-6 lg:pl-8' : ''}`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shadow-2xs">
                  {ICONS[index]}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {item.trend}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight mb-1 font-heading">
                {isVisible ? item.value : '0%'}
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {item.label}
              </h4>

              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
