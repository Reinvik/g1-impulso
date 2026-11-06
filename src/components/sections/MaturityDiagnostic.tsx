import React, { useState } from 'react';
import { ClipboardCheck, CheckCircle2, ArrowRight, RotateCcw, Award, AlertTriangle, ShieldCheck } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { text: string; score: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "¿Cómo se resuelven actualmente los incidentes y problemas en tu operación?",
    options: [
      { text: "Apagando incendios sobre la marcha, buscando culpables y sin análisis de causa raíz.", score: 1 },
      { text: "Se discuten en reuniones periódicas pero las acciones rara vez se completan a tiempo.", score: 2 },
      { text: "Utilizamos metodologías estructuradas (5 Porqués, A3) y se analizan con datos en el Gemba.", score: 3 }
    ]
  },
  {
    id: 2,
    question: "¿Con qué frecuencia el equipo de operaciones revisa sus indicadores (KPIs)?",
    options: [
      { text: "Una vez al mes cuando contabilidad emite el informe de cierre.", score: 1 },
      { text: "Semanalmente en reuniones de jefatura, pero los operarios desconocen el número.", score: 2 },
      { text: "A diario en reuniones de 10 min frente a tableros visuales en el mismo piso de trabajo.", score: 3 }
    ]
  },
  {
    id: 3,
    question: "¿Existe trabajo estandarizado documentado y auditado periódicamente?",
    options: [
      { text: "No, cada operario o técnico hace la tarea a su manera según su propia experiencia.", score: 1 },
      { text: "Hay manuales en carpetas o PDF, pero casi nadie los consulta en el día a día.", score: 2 },
      { text: "Sí, hojas de trabajo estándar visibles, auditadas semanalmente y actualizadas con Kaizen.", score: 3 }
    ]
  },
  {
    id: 4,
    question: "¿Cómo fluye el producto o servicio entre departamentos?",
    options: [
      { text: "Grandes lotes 'Push', acumulación de inventario intermedio y cuellos de botella constantes.", score: 1 },
      { text: "Intentamos coordinar por correos y llamadas, pero hay constantes desajustes y esperas.", score: 2 },
      { text: "Flujo continuo a demanda 'Pull' con Kanban, Takt Time claro y reposición sincronizada.", score: 3 }
    ]
  }
];

interface MaturityDiagnosticProps {
  onCompleteDiagnostic: (score: number, level: string) => void;
}

export const MaturityDiagnostic: React.FC<MaturityDiagnosticProps> = ({ onCompleteDiagnostic }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (score: number) => {
    const updated = [...answers, score];
    setAnswers(updated);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  // Calculate score (out of 100%)
  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  const maxPossible = QUESTIONS.length * 3;
  const percentage = Math.round((totalScore / maxPossible) * 100);

  let maturityLevel = "Nivel Reactivo (Modo Bombero)";
  let levelColor = "text-rose-600 bg-rose-50 border-rose-200";
  let recommendation = "Tu operación presenta altos desperdicios ocultos (esperas, retrabajos y sobreproducción). El primer paso urgente es un Diagnóstico Gemba y 5S para estabilizar procesos.";

  if (percentage >= 75) {
    maturityLevel = "Nivel Avanzado (Flujo Continuo)";
    levelColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
    recommendation = "Excelente base operativa. Tu siguiente paso es el despliegue estratégico Hoshin Kanri y la optimización de OEE en restricciones con SMED y TPM para clase mundial.";
  } else if (percentage >= 50) {
    maturityLevel = "Nivel Intermedio (Estandarización Parcial)";
    levelColor = "text-amber-700 bg-amber-50 border-amber-200";
    recommendation = "Cuentas con buenas intenciones pero falta disciplina de piso. Necesitas implementar Gerenciamiento Diario Tier 1/2 y eventos Kaizen rápidos de 5 días.";
  }

  return (
    <section id="diagnostico-express" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0066FF] text-white">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E59]">
                  Autodiagnóstico de Madurez Lean
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Evalúa en 1 minuto el nivel de eficiencia y control de tu operación.
                </p>
              </div>
            </div>

            {!isFinished && (
              <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                Paso {currentStep + 1} de {QUESTIONS.length}
              </span>
            )}
          </div>

          {!isFinished ? (
            /* Quiz Questions */
            <div className="py-8 space-y-6">
              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#0066FF] h-2 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-800">
                {QUESTIONS[currentStep].question}
              </h4>

              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-[#0066FF] hover:bg-blue-50/50 hover:shadow-xs transition-all flex items-start gap-3 group"
                  >
                    <span className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-[#0066FF] flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-[#0066FF] shrink-0 mt-0.5">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="py-8 space-y-6 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0066FF] mx-auto flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Índice de Madurez Operativa:
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#0B2E59] my-2">
                  {percentage}%
                </div>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border ${levelColor}`}>
                  {maturityLevel}
                </div>
              </div>

              <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 text-left">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                  Diagnóstico y Próximo Paso Recomendado:
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {recommendation}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => onCompleteDiagnostic(percentage, maturityLevel)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#1A75FF] hover:to-[#005FF0] shadow-md transition-all"
                >
                  <span>Recibir Hoja de Ruta de Intervención Completa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Repetir Test</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
