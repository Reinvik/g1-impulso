import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/content';
import { Trophy, TrendingUp, Quote, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = CASE_STUDIES[activeIndex];

  return (
    <section id="casos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0066FF] uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Resultados Comprobados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight leading-tight mb-4">
            Casos de Éxito en el Gemba: Impacto medido en EBITDA
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conoce cómo transformamos operaciones críticas con desafíos reales de disponibilidad, tiempos de entrega y mermas.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-8">
          {/* Left Column: Image & Quote */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={activeCase.image}
              alt={activeCase.industry}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#0B2E59] backdrop-blur-md">
                {activeCase.industry}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <Quote className="w-8 h-8 text-[#00D2FF] opacity-80" />
              <p className="text-sm italic leading-relaxed text-slate-200">
                "{activeCase.quote}"
              </p>
              <div className="pt-2 border-t border-white/20">
                <span className="block text-xs font-bold text-white">{activeCase.author}</span>
                <span className="block text-[11px] text-slate-300">{activeCase.role}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Problem, Solution, Results */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Cliente & Sector
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B2E59]">
                  {activeCase.clientType}
                </h3>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                  <span className="block text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">
                    Desafío Inicial:
                  </span>
                  <p className="text-slate-700">{activeCase.challenge}</p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <span className="block text-xs font-bold text-[#0066FF] uppercase tracking-wider mb-1">
                    Intervención G1 IMPULSO:
                  </span>
                  <p className="text-slate-700">{activeCase.solution}</p>
                </div>
              </div>

              {/* Results Grid */}
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                  Resultados Validados:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeCase.results.map((res) => (
                    <div key={res.label} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-black text-[#0B2E59] text-[#0066FF]">
                        {res.value}
                      </div>
                      <div className="text-xs font-bold text-slate-800 my-0.5">
                        {res.label}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        {res.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-medium">
                Caso {activeIndex + 1} de {CASE_STUDIES.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev > 0 ? prev - 1 : CASE_STUDIES.length - 1))
                  }
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="Caso anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev < CASE_STUDIES.length - 1 ? prev + 1 : 0))
                  }
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="Siguiente caso"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
