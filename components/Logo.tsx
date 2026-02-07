
import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", showTagline = false, size = 'md' }) => {
  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-24 w-24'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-5xl'
  };

  const taglineSizes = {
    sm: 'text-[6px]',
    md: 'text-[8px]',
    lg: 'text-[12px]'
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* SVG Icon part */}
      <svg 
        viewBox="0 0 100 100" 
        className={iconSizes[size]} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Frame: Three nested lines (actually looks like a double-line doorway) */}
        <path 
          d="M20 90V15H80V90M30 90V25H70V90" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
        />
        {/* Mountain peak */}
        <path 
          d="M20 90L50 35L80 90" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Sun/Moon circle */}
        <circle cx="58" cy="30" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
      
      {/* Typography part */}
      <div className="flex flex-col items-center mt-2">
        <span className={`font-light tracking-[0.3em] uppercase text-altilio leading-none ${textSizes[size]}`}>
          ALTILIO
        </span>
        {showTagline && (
          <span className={`uppercase tracking-[0.2em] mt-1 text-altilio/60 font-medium ${taglineSizes[size]}`}>
            Where Imagination Transforms Into Reality
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
