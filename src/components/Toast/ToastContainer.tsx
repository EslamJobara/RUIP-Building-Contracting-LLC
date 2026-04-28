import React from 'react';
import Portal from '../Portal';
import { useToast } from './ToastContext';
import { X } from 'lucide-react';

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <Portal rootId="toast-root">
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              flex items-center gap-2 p-4 rounded-lg shadow-lg min-w-[300px] max-w-md
              animate-fade-in
              ${toast.type === 'success' && 'bg-green-500 text-white'}
              ${toast.type === 'error' && 'bg-red-500 text-white'}
              ${toast.type === 'info' && 'bg-blue-500 text-white'}
              ${toast.type === 'warning' && 'bg-yellow-500 text-white'}
            `}
          >
            <div className="flex-1">{toast.message}</div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </Portal>
  );
};

export default ToastContainer;