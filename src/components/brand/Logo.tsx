import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showTagline = false
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  };

  // We can render the high-res transparent PNG with proper variant filtering
  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2 group cursor-pointer">
        {variant === 'dark' ? (
          <img
            src="/logo-white.png"
            alt="G1 IMPULSO"
            className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
            onError={(e) => {
              // Fallback to SVG if image not found
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <img
            src="/logo-transparent.png"
            alt="G1 IMPULSO"
            className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
            onError={(e) => {
              // Fallback to SVG if image not found
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>
      {showTagline && (
        <span
          className={`text-[10px] tracking-[0.25em] uppercase font-semibold mt-1 ${
            variant === 'dark' ? 'text-slate-400' : 'text-[#4D535A]'
          }`}
        >
          Mejora Continua · Lean Management
        </span>
      )}
    </div>
  );
};
