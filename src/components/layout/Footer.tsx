import React from 'react';
import { Logo } from '../brand/Logo';
import { ShieldCheck, MapPin, Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041021] text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="md" showTagline={false} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              <strong>G1 IMPULSO</strong> promueve la excelencia operacional con foco en las personas y resultados mediante consultoría en terreno, Kaizen, Lean Management y programas de certificación de clase mundial.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Toyota Production System Standards</span>
              </span>
            </div>
          </div>

          {/* Column 2: Soluciones */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Consultoría
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Lean Manufacturing
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Lean Office & Servicios
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Supply Chain & Logística Pull
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Reducción de Cambios (SMED)
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Mantenimiento Autónomo (TPM)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Metodología & Academia */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Formación & Belts
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#academia" className="hover:text-white transition-colors">
                  Lean Yellow Belt (Practitioner)
                </a>
              </li>
              <li>
                <a href="#academia" className="hover:text-white transition-colors">
                  Lean Green Belt (Leader)
                </a>
              </li>
              <li>
                <a href="#academia" className="hover:text-white transition-colors">
                  Lean Black Belt (Master)
                </a>
              </li>
              <li>
                <a href="#academia" className="hover:text-white transition-colors">
                  Universidad Lean In-Company
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Calculadora ROI Operativo
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Santiago, Chile (Cobertura Nacional y Latam)</span>
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/56977082067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-medium transition-colors"
                >
                  +56 9 7708 2067
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href="mailto:contacto@g1impulso.com" className="hover:text-white">
                  contacto@g1impulso.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} G1 IMPULSO SpA. Todos los derechos reservados. Excelencia Operacional & Mejora Continua.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Términos de Servicio</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
