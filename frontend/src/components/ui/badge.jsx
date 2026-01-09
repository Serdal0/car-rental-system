import React from 'react';
import { cn } from '../../lib/utils';

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    secondary: 'bg-slate-800 text-slate-300 border-slate-700',
    destructive: 'bg-red-500/10 text-red-400 border-red-500/30',
    outline: 'border-slate-700 text-slate-300',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';

export { Badge };

