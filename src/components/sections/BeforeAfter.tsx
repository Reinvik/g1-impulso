import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Flame, Sparkles, ArrowRight, ArrowLeftRight } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    topic: "Gestión de Problemas",
    traditional: "Se apagan incendios a diario. Los problemas se ocultan o se discuten días después en reuniones extensas sin datos.",
    g1Impulso: "Problemas visibles en minutos en tableros de gestión visual. Resolución estructurada en el turno con método A3.",
    metricChange: "-70% Tiempo de Respuesta"
  },
  {
    topic: "Flujo de Materiales / Información",
    traditional: "Producción por lotes masivos ('Push'). Cuellos de botella invisibles, acumulación de inventario en proceso (WIP).",
    g1Impulso: "Flujo continuo a demanda ('Pull'). Sistemas Kanban y nivelación Heijunka para producir exactamente lo requerido.",
    metricChange: "-45% Lead Time"
  },
  {
    topic: "Rol del Liderazgo & Supervisión",
    traditional: "Supervisores atrapados en oficinas respondiendo correos y buscando culpables cuando fallan las metas.",
    g1Impulso: "Líderes entrenadores presentes en el Gemba realizando Gemba Walks diarios, apoyando y desbloqueando a su equipo.",
    metricChange: "+50% Adherencia al Estándar"
  },
  {
    topic: "Tiempos de Preparación y Cambio",
    traditional: "Máquinas detenidas durante horas para cambiar formatos o recetas. Paradas de mantención no planificadas.",
    g1Impulso: "Metodología SMED aplicada: cambios de formato estandarizados en minutos y mantenimiento autónomo TPM.",
    metricChange: "+25% OEE de Maquinaria"
  },
  {
    topic: "Impacto en Estados Financieros",
    traditional: "Márgenes carcomidos por retrabajos, horas extras no productivas, mermas y capital inmovilizado en bodegas.",
    g1Impulso: "Ahorro directo transferido a EBITDA, reducción de inventario inmovilizado y mayor capacidad sin inversiones de capital.",
    metricChange: "5.8x Retorno de Inversión"
  }
];

export const BeforeAfter: React.FC = () => {
  const [viewMode, setViewMode] = useState<'side-by-side' | 'focused'>('side-by-side');

  return (
    <section id="comparativa" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>El Impacto de la Transformación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            ¿Cómo cambia tu operación con{' '}
            <span className="bg-gradient-to-r from-[#00D2FF] to-[#0066FF] bg-clip-text text-transparent">
              G1 IMPULSO
            </span>
            ?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Una comparativa frontal entre la operación tradicional reactiva y una organización sincronizada bajo principios Lean y Kaizen.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="space-y-4">
          {/* Header Row (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 gap-4 pb-2 px-6 text-xs uppercase tracking-wider font-bold text-slate-400">
            <div className="col-span-3">Dimensión Operativa</div>
            <div className="col-span-4 text-rose-400 flex items-center gap-1.5">
              <Flame className="w-4 h-4" />
              <span>Operación Tradicional (Modo Apagafuegos)</span>
            </div>
            <div className="col-span-5 text-[#00D2FF] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Con G1 IMPULSO (Flujo Sincronizado)</span>
            </div>
          </div>

          {/* Data Rows */}
          {COMPARISON_ROWS.map((row, idx) => (
            <div
              key={row.topic}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 backdrop-blur-md hover:border-white/20 transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                {/* Column 1: Dimension */}
                <div className="lg:col-span-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1 lg:hidden">
                    Dimensión:
                  </span>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    {row.topic}
                  </h4>
                  <span className="inline-block mt-2 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {row.metricChange}
                  </span>
                </div>

                {/* Column 2: Traditional */}
                <div className="lg:col-span-4 bg-rose-950/30 border border-rose-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-1 lg:hidden">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Antes / Tradicional</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {row.traditional}
                  </p>
                </div>

                {/* Column 3: G1 Impulso */}
                <div className="lg:col-span-5 bg-[#0066FF]/10 border border-[#0066FF]/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-1 lg:hidden">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Con G1 IMPULSO</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                    {row.g1Impulso}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
