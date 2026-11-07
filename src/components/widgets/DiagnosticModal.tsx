import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import confetti from 'canvas-confetti';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Diagnóstico Gemba Inicial'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    service: preselectedService,
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 }
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#071C38] to-[#0B2E59] text-white p-6 sm:p-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diagnóstico Ejecutivo en Terreno</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Agenda tu Sesión con G1 IMPULSO
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Revisión técnica de tus procesos, cuantificación de desperdicios y hoja de ruta.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#0B2E59]">
                ¡Diagnóstico Solicitado con Éxito!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nos pondremos en contacto contigo dentro de las próximas 24 horas para coordinar la visita a planta o sesión ejecutiva.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0066FF]"
                >
                  Entendido
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Marcelo Gómez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Correo Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="mgomez@empresa.cl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 9876 5432"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nombre de la empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Cargo
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Gerente Operaciones"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Área o Servicio de Interés
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                >
                  <option>Diagnóstico Gemba Inicial</option>
                  <option>Lean Manufacturing & OEE en Planta</option>
                  <option>Lean Office & Procesos Administrativos</option>
                  <option>Supply Chain & Logística Pull</option>
                  <option>Formación In-Company (Yellow, Green, Black Belts)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#1A75FF] hover:to-[#005FF0] shadow-md transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Confirmar Solicitud de Diagnóstico</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 flex flex-col items-center gap-2">
                <a
                  href="https://wa.me/56977082067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>O escríbenos directamente a WhatsApp: +56 9 7708 2067</span>
                </a>
                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Confidencial bajo Acuerdo NDA</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
