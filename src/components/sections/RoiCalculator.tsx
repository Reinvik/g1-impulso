import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onPlanRequest: (data: { headcount: number; annualSavings: number; hoursSaved: number }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onPlanRequest }) => {
  const [headcount, setHeadcount] = useState<number>(50);
  const [hourlyRate, setHourlyRate] = useState<number>(18); // in USD
  const [wastePercentage, setWastePercentage] = useState<number>(25); // 25% waste/waiting
  const [currency, setCurrency] = useState<'USD' | 'CLP'>('USD');

  // Operational assumptions:
  // 1 collaborator = 1,920 working hours / year (approx 40 hrs/week * 48 weeks)
  const annualHoursPerPerson = 1920;
  const totalAnnualHours = headcount * annualHoursPerPerson;

  // With Lean & Kaizen, we typically eliminate 50% to 70% of current waste:
  // E.g., if waste is 25%, Lean recaptures ~60% of that waste = 15% net efficiency gain.
  const efficiencyGainRatio = (wastePercentage / 100) * 0.6;
  const hoursRecoveredPerYear = Math.round(totalAnnualHours * efficiencyGainRatio);
  const annualSavingsUsd = Math.round(hoursRecoveredPerYear * hourlyRate);
  
  // Approximate exchange rate for CLP (e.g. 950 CLP/USD)
  const exchangeRate = 950;
  const annualSavingsClp = annualSavingsUsd * exchangeRate;
  
  // Equivalent full-time employees (FTEs) unlocked without hiring:
  const equivalentFtes = (hoursRecoveredPerYear / annualHoursPerPerson).toFixed(1);

  const formatCurrency = (valUsd: number) => {
    if (currency === 'CLP') {
      const valClp = valUsd * exchangeRate;
      return `$${valClp.toLocaleString('es-CL')} CLP`;
    }
    return `$${valUsd.toLocaleString('en-US')} USD`;
  };

  return (
    <section id="calculadora" className="py-24 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Retorno Operativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight leading-tight mb-4">
            ¿Cuánto dinero está atrapado en las ineficiencias de tu operación?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Ajusta las variables de tu equipo y estima el valor económico anual que puedes liberar eliminando tiempos muertos y retrabajos.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 bg-white">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#0066FF]" />
                <span>Variables de tu Organización</span>
              </h3>
              {/* Currency Selector */}
              <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    currency === 'USD'
                      ? 'bg-white text-[#0B2E59] shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrency('CLP')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    currency === 'CLP'
                      ? 'bg-white text-[#0B2E59] shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  CLP ($)
                </button>
              </div>
            </div>

            {/* Slider 1: Colaboradores */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <span>Colaboradores en la Operación:</span>
                </label>
                <span className="text-lg font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-lg">
                  {headcount} personas
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>10 operarios</span>
                <span>250</span>
                <span>500+ colaboradores</span>
              </div>
            </div>

            {/* Slider 2: Costo / Hora Hombre */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">
                  Costo Promedio Hora-Hombre ({currency}):
                </label>
                <span className="text-lg font-extrabold text-[#0B2E59] bg-slate-100 px-3 py-1 rounded-lg">
                  {currency === 'USD' ? `$${hourlyRate} USD/h` : `$${(hourlyRate * exchangeRate).toLocaleString('es-CL')} CLP/h`}
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="60"
                step="2"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2E59]"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>$8 USD</span>
                <span>$30 USD</span>
                <span>$60 USD</span>
              </div>
            </div>

            {/* Slider 3: Desperdicio Estimado (Muda) */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">
                  Tiempo en Esperas, Retrabajos o Mermas (Muda):
                </label>
                <span className="text-lg font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">
                  {wastePercentage}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={wastePercentage}
                onChange={(e) => setWastePercentage(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>10% (Muy bajo)</span>
                <span>25% (Promedio industrial)</span>
                <span>50% (Crítico)</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed italic bg-slate-50 p-3 rounded-lg border border-slate-100">
              * Nota: Los datos de Kaizen Institute y Lean Enterprise demuestran que las operaciones sin estandarización pierden entre el 20% y el 40% de su tiempo productivo en actividades sin valor añadido (Muda).
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-gradient-to-br from-[#071C38] to-[#0B2E59] text-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Potencial de Captura Anual</span>
              </div>

              {/* Huge Savings Display */}
              <div className="mb-8">
                <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                  Ahorro Económico Estimado / Año:
                </span>
                <div className="text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight text-[#00D2FF]">
                  {formatCurrency(annualSavingsUsd)}
                </div>
                <span className="text-xs text-slate-300 mt-1 block">
                  Impacto directo en margen de contribución / EBITDA
                </span>
              </div>

              {/* Secondary Stats */}
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Horas Liberadas</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {hoursRecoveredPerYear.toLocaleString()} hrs
                  </div>
                  <span className="text-[10px] text-slate-400">por año</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <Users className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>Capacidad Extra</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    +{equivalentFtes} FTEs
                  </div>
                  <span className="text-[10px] text-slate-400">sin contrataciones</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <button
                onClick={() =>
                  onPlanRequest({
                    headcount,
                    annualSavings: annualSavingsUsd,
                    hoursSaved: hoursRecoveredPerYear
                  })
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#1A75FF] hover:to-[#005FF0] shadow-lg shadow-blue-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Validar este Ahorro con un Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
