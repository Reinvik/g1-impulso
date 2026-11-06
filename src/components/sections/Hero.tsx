import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { MethodologyBadge } from '../ui/MethodologyBadges';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic, onOpenCalculator }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#041021] via-[#071C38] to-[#0B2E59] text-white">
      {/* Background Industrial Overlay with High Quality Photography */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85"
          alt="Operaciones Industriales y Mejora Continua"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Radial Gradient Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#0066FF]/30 to-[#00D2FF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-[#002D72]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Top Tagline / Category Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-200 mb-6 shadow-inner animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#00D2FF] animate-pulse" />
          <span className="font-semibold text-white tracking-wide">G1 IMPULSO</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-200">Consultoría Estratégica en Mejora Continua & Lean</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.12] mb-6">
          Excelencia operacional con foco en las{' '}
          <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#B8BCC2] bg-clip-text text-transparent">
            personas y resultados.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Transformamos la fricción operativa en <strong className="text-white font-semibold">flujo continuo y rentabilidad</strong>. Consultoría en terreno (Gemba), despliegue Kaizen y cultura Lean para multiplicar la capacidad de tu negocio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-xl mx-auto mb-12">
          <button
            onClick={onOpenDiagnostic}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#1A75FF] hover:to-[#005FF0] shadow-xl shadow-blue-900/60 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Solicitar Diagnóstico en Terreno</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <TrendingUp className="w-5 h-5 text-[#00D2FF]" />
            <span>Simular Ahorro Operativo</span>
          </button>
        </div>

        {/* Methodology Badges Bar */}
        <div className="pt-6 border-t border-white/10 max-w-6xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5 flex-nowrap overflow-x-auto py-2 no-scrollbar px-2">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1 shrink-0 whitespace-nowrap">
            Herramientas Nucleares:
          </span>
          <MethodologyBadge name="VSM" />
          <MethodologyBadge name="Kaizen" />
          <MethodologyBadge name="5S" />
          <MethodologyBadge name="Hoshin Kanri" />
          <MethodologyBadge name="SMED" />
          <MethodologyBadge name="TPM" />
          <MethodologyBadge name="Kanban" />
          <MethodologyBadge name="A3" />
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Resultados auditados en EBITDA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Acompañamiento 100% presencial en Gemba</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
            <span>Metodología estándar internacional</span>
          </div>
        </div>
      </div>

      {/* Down Chevron indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
        <a href="#metricas" aria-label="Ir a Métricas">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
