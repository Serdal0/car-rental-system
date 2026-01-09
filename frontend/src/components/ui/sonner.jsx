import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

// Global toast state
const toastState = {
  toasts: [],
  setToasts: null,
};

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  
  const toast = useCallback(({ title, description, variant = 'default', duration = 3000 }) => {
    if (toastState.setToasts) {
      const id = Date.now().toString() + Math.random();
      const newToast = { id, title, description, variant };
      
      toastState.setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          toastState.setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
      }
    } else {
      // Fallback: console ve alert
      console.log('Toast:', title, description);
      alert(`${title}: ${description}`);
    }
  }, []);

  return { toast };
};

export const Toaster = ({ position = 'top-center' }) => {
  const [toasts, setToasts] = useState([]);

  // Global state'i güncelle
  useEffect(() => {
    toastState.setToasts = setToasts;
    return () => {
      toastState.setToasts = null;
    };
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-20 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const variantStyles = {
    default: 'bg-slate-800 border-slate-700 text-white',
    destructive: 'bg-red-500/10 border-red-500/30 text-red-400',
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
  };

  const variantIcons = {
    default: Info,
    destructive: AlertCircle,
    success: CheckCircle2,
  };

  return (
    <ToastContext.Provider value={{ toast: () => {} }}>
      <div className={cn('fixed z-[9999] flex flex-col gap-2', positions[position])}>
        {toasts.map((toast) => {
          const Icon = variantIcons[toast.variant] || Info;
          return (
            <div
              key={toast.id}
              className={cn(
                'group pointer-events-auto relative flex w-full max-w-md items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 pr-8 shadow-2xl transition-all animate-in slide-in-from-top-5',
                variantStyles[toast.variant]
              )}
            >
              <div className="flex items-start space-x-3">
                <Icon className="h-5 w-5 shrink-0" />
                <div className="flex-1 space-y-1">
                  {toast.title && (
                    <div className="text-sm font-semibold">{toast.title}</div>
                  )}
                  {toast.description && (
                    <div className="text-sm opacity-90">{toast.description}</div>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="absolute right-2 top-2 rounded-md p-1 text-gray-400 opacity-0 transition-opacity hover:text-white group-hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export { ToastContext };
