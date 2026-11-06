import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { MetricsBar } from './components/sections/MetricsBar';
import { TrustMarquee } from './components/sections/TrustMarquee';
import { Methodology } from './components/sections/Methodology';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Solutions } from './components/sections/Solutions';
import { RoiCalculator } from './components/sections/RoiCalculator';
import { MaturityDiagnostic } from './components/sections/MaturityDiagnostic';
import { Academy } from './components/sections/Academy';
import { CaseStudies } from './components/sections/CaseStudies';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { FloatingCta } from './components/widgets/FloatingCta';
import { DiagnosticModal } from './components/widgets/DiagnosticModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Diagnóstico Gemba Inicial');

  const handleOpenDiagnosticModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanRequestFromCalculator = (data: { headcount: number; annualSavings: number; hoursSaved: number }) => {
    setSelectedService(`Validación Ahorro: $${data.annualSavings.toLocaleString()} USD (${data.headcount} personas)`);
    setModalOpen(true);
  };

  const handleCompleteDiagnostic = (score: number, level: string) => {
    setSelectedService(`Hoja de Ruta - Nivel Madurez: ${score}% (${level})`);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-[#0066FF] selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenDiagnosticModal={() => handleOpenDiagnosticModal('Diagnóstico Gemba Inicial')}
        onOpenCalculator={handleScrollToCalculator}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDiagnostic={() => handleOpenDiagnosticModal('Diagnóstico Gemba Inicial')}
          onOpenCalculator={handleScrollToCalculator}
        />

        {/* Live Metrics Impact Bar */}
        <MetricsBar />

        {/* Industry Trust Marquee */}
        <TrustMarquee />

        {/* 4-Phase Interactive Methodology */}
        <Methodology />

        {/* Interactive Comparison: Antes vs. Después */}
        <BeforeAfter />

        {/* Core Solutions & Lines of Intervention */}
        <Solutions onSelectSolution={(service) => handleOpenDiagnosticModal(service)} />

        {/* Interactive ROI & Potential Calculator */}
        <RoiCalculator onPlanRequest={handlePlanRequestFromCalculator} />

        {/* Interactive Maturity Self-Assessment */}
        <MaturityDiagnostic onCompleteDiagnostic={handleCompleteDiagnostic} />

        {/* Academy & Lean Belt Certifications */}
        <Academy onEnrollClick={(course) => handleOpenDiagnosticModal(`Certificación: ${course}`)} />

        {/* Proven Case Studies & Testimonials */}
        <CaseStudies />

        {/* Executive Contact & Booking Form */}
        <ContactSection initialInterest={selectedService} />
      </main>

      {/* Corporate Tier-1 Footer */}
      <Footer />

      {/* Floating CTA Widget (WhatsApp + Quick Sim) */}
      <FloatingCta
        onOpenDiagnostic={() => handleOpenDiagnosticModal('Diagnóstico Rápido')}
        onOpenCalculator={handleScrollToCalculator}
      />

      {/* Modal Dialog */}
      <DiagnosticModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}

export default App;
