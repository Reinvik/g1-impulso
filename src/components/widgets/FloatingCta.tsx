import React, { useState } from 'react';
import { Calculator, X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface FloatingCtaProps {
  onOpenDiagnostic: () => void;
  onOpenCalculator: () => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenCalculator }) => {
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hola G1 IMPULSO, me gustaría consultar con un especialista sobre sus servicios de mejora continua y diagnóstico operativo."
    );
    window.open(`https://wa.me/56977082067?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Speech Bubble Tooltip */}
      {!bubbleDismissed && (
        <div className="pointer-events-auto bg-white rounded-2xl p-3 shadow-xl border border-slate-200 text-xs max-w-xs animate-bounce-subtle flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="block font-bold text-[#0B2E59]">¿Deseas evaluar tu operación?</span>
            <p className="text-slate-600 text-[11px] leading-tight mt-0.5">
              Habla directamente con un consultor senior en WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setBubbleDismissed(true)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Quick Simulator Pill */}
        <button
          onClick={onOpenCalculator}
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white text-slate-800 text-xs font-bold shadow-lg border border-slate-200 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
        >
          <Calculator className="w-4 h-4 text-[#0066FF]" />
          <span>Simular ROI</span>
        </button>

        {/* WhatsApp Floating Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative group p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          {/* Online green indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
          <WhatsAppIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};
