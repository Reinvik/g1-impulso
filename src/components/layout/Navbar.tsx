import React, { useState, useEffect } from 'react';
import { Logo } from '../brand/Logo';
import { Menu, X, ArrowRight, Calculator } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface NavbarProps {
  onOpenDiagnosticModal: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnosticModal, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Antes y Después', href: '#comparativa' },
    { label: 'Calculadora ROI', href: '#calculadora' },
    { label: 'Academia & Belts', href: '#academia' },
    { label: 'Casos de Éxito', href: '#casos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071C38]/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-3'
          : 'bg-[#071C38]/70 backdrop-blur-xs border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center focus:outline-hidden">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/56977082067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-300 hover:text-white bg-emerald-500/15 hover:bg-emerald-500/25 rounded-lg border border-emerald-500/30 transition-all shadow-xs"
              title="Conversar por WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>+56 9 7708 2067</span>
            </a>

            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Simular Ahorro</span>
            </button>

            <button
              onClick={onOpenDiagnosticModal}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0E75FF] hover:to-[#005FF9] shadow-md shadow-blue-900/50 hover:shadow-blue-600/40 transition-all duration-300"
            >
              <span>Agendar Diagnóstico</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDiagnosticModal}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0066FF] rounded-md sm:hidden"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-hidden"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071C38] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="https://wa.me/56977082067"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp: +56 9 7708 2067</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-white/5 border border-white/10"
            >
              <Calculator className="w-4 h-4 text-[#00D2FF]" />
              <span>Calcular Potencial de Ahorro</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnosticModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-[#0066FF] shadow-lg"
            >
              <span>Solicitar Diagnóstico Sin Costo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
