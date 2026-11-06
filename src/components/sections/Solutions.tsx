import React, { useState } from 'react';
import { SOLUTIONS_DATA, SolutionItem } from '../../data/content';
import { Factory, Briefcase, Truck, GraduationCap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { MethodologyBadge } from '../ui/MethodologyBadges';

const ICON_COMPONENTS: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />
};

interface SolutionsProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSolutions =
    activeCategory === 'all'
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.id === activeCategory);

  return (
    <section id="soluciones" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0066FF] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestras Líneas de Intervención</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight leading-tight mb-4">
            Soluciones integrales de Mejora Continua diseñadas para tu sector
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Desde la línea de ensamble hasta la mesa directiva. Adaptamos las herramientas Lean al nivel de madurez y objetivos específicos de tu negocio.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-[#0066FF]/40 transition-all duration-300 flex flex-col group"
            >
              {/* Image banner with overlay */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-[#0B2E59] backdrop-blur-md shadow-xs">
                    {solution.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1">
                    {solution.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2.5 mb-6">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Beneficios Clave:
                    </span>
                    {solution.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tool Badges */}
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Herramientas Clave:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {solution.tools.map((tool) => (
                        <MethodologyBadge key={tool} name={tool} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectSolution(solution.title)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0066FF] hover:text-[#0052CC] group-hover:translate-x-1 transition-all"
                  >
                    <span>Solicitar Propuesta para esta Área</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
