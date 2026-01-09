import React from 'react';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-slate-700 bg-slate-800 ring-offset-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-amber-500 data-[state=checked]:text-slate-900',
        className
      )}
      data-state={checked ? 'checked' : 'unchecked'}
      onClick={() => onCheckedChange?.(!checked)}
      {...props}
    >
      {checked && <Check className="h-4 w-4" />}
    </button>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };

