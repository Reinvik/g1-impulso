import React, { useState } from 'react';
import { ACADEMY_COURSES, AcademyCourse } from '../../data/content';
import { Award, BookOpen, Clock, Users, CheckCircle2, ArrowRight, Download, Sparkles } from 'lucide-react';

interface AcademyProps {
  onEnrollClick: (courseTitle: string) => void;
}

export const Academy: React.FC<AcademyProps> = ({ onEnrollClick }) => {
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);

  return (
    <section id="academia" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Academia G1 IMPULSO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight leading-tight mb-4">
            Formación y Certificaciones Lean Belt de Alto Rendimiento
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Capacitamos a tus equipos para que no dependan eternamente de consultores externos. Programas aplicados con proyectos reales en planta o servicio.
          </p>
        </div>

        {/* 3 Belt Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {ACADEMY_COURSES.map((course) => (
            <div
              key={course.belt}
              className={`rounded-3xl border ${course.borderColor} bg-white shadow-xl shadow-slate-200/60 p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative`}
            >
              <div>
                {/* Belt Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${course.color}`}>
                    {course.belt}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  {course.belt}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Course Metadata */}
                <div className="space-y-2 py-4 border-y border-slate-100 text-xs text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0066FF]" />
                    <span className="font-semibold text-slate-800">Duración:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-slate-800">Dirigido a:</span>
                    <span>{course.target}</span>
                  </div>
                </div>

                {/* Modules preview */}
                <div className="space-y-2.5 mb-6">
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Módulos y Competencias:
                  </span>
                  {course.modules.map((m) => (
                    <div key={m} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onEnrollClick(course.belt)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#0B2E59] hover:bg-[#002D72] shadow-md transition-colors"
                >
                  <span>Solicitar Temario In-Company</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Academy Banner */}
        <div className="bg-gradient-to-r from-[#071C38] to-[#0B2E59] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#00D2FF]">
              Solución Corporativa
            </span>
            <h4 className="text-xl sm:text-2xl font-bold">
              ¿Deseas implementar una Universidad / Escuela Lean interna en tu empresa?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Diseñamos rutas de carrera técnica y liderazgo operativo 100% personalizadas según los procesos, equipos e indicadores propios de tu compañía.
            </p>
          </div>
          <button
            onClick={() => onEnrollClick("Universidad Corporativa Lean")}
            className="shrink-0 px-6 py-3.5 rounded-xl text-sm font-bold text-[#071C38] bg-white hover:bg-slate-100 shadow-md transition-all"
          >
            Cotizar Escuela In-Company
          </button>
        </div>
      </div>
    </section>
  );
};
