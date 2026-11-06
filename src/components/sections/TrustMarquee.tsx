import React from 'react';
import { Pickaxe, Factory, Truck, Apple, Stethoscope, Building2 } from 'lucide-react';

const SECTORS = [
  { icon: <Pickaxe className="w-5 h-5" />, name: "Gran Minería & Fundición", sub: "Disponibilidad OEE & Paradas" },
  { icon: <Factory className="w-5 h-5" />, name: "Manufactura Industrial", sub: "Flujo Continuo & SMED" },
  { icon: <Truck className="w-5 h-5" />, name: "Logística & E-commerce", sub: "Picking & Despacho Rápido" },
  { icon: <Apple className="w-5 h-5" />, name: "Alimentos & Agroindustria", sub: "Inocuidad & Reducción de Mermas" },
  { icon: <Stethoscope className="w-5 h-5" />, name: "Salud & Clínicas", sub: "Tiempos de Espera & Pabellones" },
  { icon: <Building2 className="w-5 h-5" />, name: "Banca & Shared Services", sub: "Lean Office & Cero Burocracia" },
];

export const TrustMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
          Metodología Adaptada a los Principales Ecosistemas Productivos
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients on left/right edges for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {/* Double list for seamless infinite loop */}
          {[...SECTORS, ...SECTORS, ...SECTORS].map((sector, index) => (
            <div
              key={`${sector.name}-${index}`}
              className="inline-flex items-center gap-3.5 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#0066FF]/40 hover:shadow-md transition-all group shrink-0"
            >
              <div className="p-2 rounded-lg bg-slate-50 text-[#0B2E59] group-hover:bg-[#0066FF]/10 group-hover:text-[#0066FF] transition-colors">
                {sector.icon}
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-slate-900 group-hover:text-[#0B2E59] transition-colors">
                  {sector.name}
                </span>
                <span className="block text-[11px] text-slate-500 font-medium">
                  {sector.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
