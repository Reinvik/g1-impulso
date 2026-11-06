import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../../data/content';
import { CheckCircle2, ArrowRight, Sparkles, Layers, Compass, Zap, ShieldCheck } from 'lucide-react';
import { MethodologyBadge } from '../ui/MethodologyBadges';

const PHASE_ICONS = [
  <Layers className="w-5 h-5" />,
  <Compass className="w-5 h-5" />,
  <Zap className="w-5 h-5" />,
  <ShieldCheck className="w-5 h-5" />
];

export const Methodology: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = METHODOLOGY_STEPS[activePhaseIndex];

  return (
    <section id="metodologia" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0066FF] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>El Método G1 IMPULSO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight leading-tight mb-4">
            De la fricción al flujo continuo en 4 etapas garantizadas
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Un marco de intervención probado en terreno que alinea a los líderes, empodera a los operadores y captura ahorros directos para el negocio.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {METHODOLOGY_STEPS.map((phase, index) => {
            const isActive = activePhaseIndex === index;
            return (
              <button
                key={phase.title}
                onClick={() => setActivePhaseIndex(index)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-[#071C38] text-white border-[#0066FF] shadow-lg shadow-blue-950/20 ring-2 ring-[#0066FF]/30 scale-[1.02]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#0066FF]/20 rounded-full blur-xl pointer-events-none" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`p-2 rounded-xl text-xs font-bold ${
                      isActive ? 'bg-[#0066FF] text-white' : 'bg-white text-slate-700 shadow-2xs'
                    }`}
                  >
                    {PHASE_ICONS[index]}
                  </span>
                  <span
                    className={`text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/10 text-slate-300' : 'bg-slate-200/70 text-slate-600'
                    }`}
                  >
                    Fase 0{phase.id}
                  </span>
                </div>
                <h4
                  className={`text-base font-bold mb-1 transition-colors ${
                    isActive ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {phase.title}
                </h4>
                <p
                  className={`text-xs line-clamp-2 leading-relaxed ${
                    isActive ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {phase.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Phase Card Display (Split Layout) */}
        <div className="bg-gradient-to-br from-slate-900 via-[#071C38] to-[#0B2E59] rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0066FF]/20 border border-[#0066FF]/40 text-xs font-bold text-[#00D2FF]">
              <span>{activePhase.badge}</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                {activePhase.title}
              </h3>
              <p className="text-base sm:text-lg text-[#00D2FF] font-medium mb-4">
                {activePhase.subtitle}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {activePhase.description}
              </p>
            </div>

            {/* Tools Utilized */}
            <div>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Herramientas Técnicas Utilizadas en esta Fase:
              </span>
              <div className="flex flex-wrap gap-2">
                {activePhase.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 text-slate-200 border border-white/10 backdrop-blur-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverable Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                Entregable Concreto:
              </span>
              <p className="text-sm font-semibold text-white">
                {activePhase.deliverable}
              </p>
            </div>

            {/* Highlight Banner */}
            <div className="flex items-center gap-3 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <Sparkles className="w-4 h-4 text-[#00D2FF] shrink-0" />
              <span>{activePhase.highlight}</span>
            </div>
          </div>

          {/* Right Column: High Quality Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-4/3 group">
              <img
                src={activePhase.image}
                alt={activePhase.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C38] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                <p className="text-xs font-semibold text-white">
                  Trabajo 100% presencial en el Gemba junto al equipo operativo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
