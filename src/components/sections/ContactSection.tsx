import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInterest }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    sector: 'Manufactura Industrial',
    challenge: initialInterest || 'Diagnóstico Gemba Inicial',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola G1 IMPULSO, me gustaría solicitar información y agendar un diagnóstico operativo inicial para mi empresa ${formData.company || ''}.`
    );
    window.open(`https://wa.me/56962262290?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#041021] via-[#071C38] to-[#0B2E59] rounded-3xl p-6 sm:p-12 lg:p-16 text-white shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inicia la Transformación</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                  Agenda tu Diagnóstico Gemba sin costo inicial
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Uno de nuestros consultores Senior visitará tu operación (o realizaremos una sesión ejecutiva de evaluación) para identificar tus principales restricciones y cuantificar el potencial de ahorro.
                </p>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 border-y border-white/10 py-6">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Evaluación preliminar de los 8 desperdicios (Muda)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Estimación de ROI y plan de captura en 90 días</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-[#00D2FF] shrink-0" />
                  <span>Acuerdo de Confidencialidad (NDA) garantizado</span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white">
                    <Phone className="w-4 h-4 text-[#00D2FF]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400">Teléfono Directo:</span>
                    <a href="tel:+56962262290" className="font-semibold text-white hover:text-[#00D2FF]">
                      +56 9 6226 2290
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white">
                    <Mail className="w-4 h-4 text-[#00D2FF]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400">Correo Electrónico:</span>
                    <a href="mailto:contacto@g1impulso.com" className="font-semibold text-white hover:text-[#00D2FF]">
                      contacto@g1impulso.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white">
                    <MapPin className="w-4 h-4 text-[#00D2FF]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400">Oficina Central:</span>
                    <span className="font-semibold text-white">
                      Las Condes / Providencia, Santiago de Chile
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Button */}
              <div>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/40 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar Directo por WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div className="lg:col-span-7 bg-white text-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B2E59]">
                    ¡Solicitud Recibida con Éxito!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Un consultor senior de <strong>G1 IMPULSO</strong> revisará los antecedentes de tu operación y te contactará en un plazo máximo de 24 horas hábiles.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#0B2E59] bg-slate-100 hover:bg-slate-200"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0B2E59] mb-4">
                    Completa los datos de tu empresa
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Rodrigo Valenzuela"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rvalenzuela@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+56 9 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Empresa & Cargo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Minera / Gerente Operaciones"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Sector Productivo
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 bg-white"
                      >
                        <option>Gran Minería & Fundición</option>
                        <option>Manufactura Industrial</option>
                        <option>Logística & Distribución</option>
                        <option>Alimentos & Agroindustria</option>
                        <option>Salud & Clínicas</option>
                        <option>Banca & Servicios Compartidos</option>
                        <option>Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Principal Desafío
                      </label>
                      <select
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 bg-white"
                      >
                        <option>Diagnóstico Gemba Inicial</option>
                        <option>Aumentar OEE y disponibilidad de equipos</option>
                        <option>Reducir Lead Time y tiempos de entrega</option>
                        <option>Implementar 5S y Gerenciamiento Diario</option>
                        <option>Formar Green / Black Belts In-Company</option>
                        <option>Optimizar procesos Lean Office / Administrativos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Comentario o contexto adicional (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos brevemente sobre las operaciones, dotación o plantas que deseas intervenir..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#1A75FF] hover:to-[#005FF0] shadow-lg shadow-blue-900/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Procesando...</span>
                    ) : (
                      <>
                        <span>Solicitar Diagnóstico Ejecutivo en Terreno</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Tus datos se manejan bajo estricta confidencialidad corporativa.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
