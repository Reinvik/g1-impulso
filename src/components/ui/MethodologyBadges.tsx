import React from 'react';
import { ShieldCheck, GitMerge, Zap, Compass, RefreshCw, Layers, CheckCircle2, Award } from 'lucide-react';

interface BadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md';
}

const BADGE_MAP: Record<string, { label: string; icon: React.ReactNode; color: string; bg: string }> = {
  'VSM': {
    label: 'Value Stream Mapping',
    icon: <GitMerge className="w-3.5 h-3.5" />,
    color: 'text-blue-700',
    bg: 'bg-blue-50 border-blue-200'
  },
  '5S': {
    label: '5S Visual Workplace',
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50 border-emerald-200'
  },
  'Kaizen': {
    label: 'Kaizen Sprints',
    icon: <Zap className="w-3.5 h-3.5" />,
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200'
  },
  'Hoshin Kanri': {
    label: 'Hoshin Kanri',
    icon: <Compass className="w-3.5 h-3.5" />,
    color: 'text-indigo-700',
    bg: 'bg-indigo-50 border-indigo-200'
  },
  'SMED': {
    label: 'SMED Quick Change',
    icon: <RefreshCw className="w-3.5 h-3.5" />,
    color: 'text-purple-700',
    bg: 'bg-purple-50 border-purple-200'
  },
  'TPM': {
    label: 'Total Productive Maint.',
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    color: 'text-cyan-700',
    bg: 'bg-cyan-50 border-cyan-200'
  },
  'Kanban': {
    label: 'Kanban & Pull Flow',
    icon: <Layers className="w-3.5 h-3.5" />,
    color: 'text-sky-700',
    bg: 'bg-sky-50 border-sky-200'
  },
  'A3': {
    label: 'A3 Problem Solving',
    icon: <Award className="w-3.5 h-3.5" />,
    color: 'text-rose-700',
    bg: 'bg-rose-50 border-rose-200'
  }
};

export const MethodologyBadge: React.FC<BadgeProps> = ({ name, className = '', size = 'md' }) => {
  const badgeInfo = BADGE_MAP[name] || {
    label: name,
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    color: 'text-slate-700',
    bg: 'bg-slate-100 border-slate-200'
  };

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs font-semibold';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 hover:scale-105 shadow-xs shrink-0 whitespace-nowrap ${badgeInfo.bg} ${badgeInfo.color} ${sizeClasses} ${className}`}
      title={badgeInfo.label}
    >
      {badgeInfo.icon}
      <span>{name}</span>
    </span>
  );
};
