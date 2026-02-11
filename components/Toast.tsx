import React, { useEffect } from 'react';

interface ToastProps {
  quote: string;
  statChanges: string[];
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ quote, statChanges, isVisible, onClose }) => {
  // We keep the timer for auto-close, but design it as a center modal
  useEffect(() => {
    if (isVisible) {
      // Dynamic duration based on reading length, min 3.0s, max 5.0s (Reduced by 0.5s from previous iteration)
      const duration = Math.min(Math.max(3000, quote.length * 100), 5000);
      const timer = setTimeout(() => {
        onClose();
      }, duration); 
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, quote]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
       {/* Backdrop for contrast */}
       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"></div>
       
       <div className="relative bg-black/90 text-white px-8 py-8 rounded-2xl shadow-2xl flex flex-col items-center animate-zoom-in border-2 border-festive-gold/50 transform scale-110 max-w-md w-full mx-4 text-center">
         <div className="text-festive-gold text-xs font-bold uppercase tracking-widest mb-4">事件结算</div>
         
         {/* Quote / Feedback Text */}
         <div className="mb-6">
           <p className="text-lg md:text-xl font-medium text-gray-100 italic leading-relaxed">
             "{quote}"
           </p>
         </div>

         {/* Decorative Divider */}
         {(statChanges.length > 0) && (
            <div className="w-16 h-px bg-white/20 mb-4"></div>
         )}

         {/* Stat Changes */}
         <div className="flex flex-col items-center space-y-1">
           {statChanges.map((part, i) => (
             <div key={i} className="text-lg font-bold flex items-center space-x-2">
                {part.includes('+') ? (
                  <span className="text-green-400 drop-shadow-md">{part.trim()}</span>
                ) : part.includes('-') ? (
                  <span className="text-red-400 drop-shadow-md">{part.trim()}</span>
                ) : (
                  <span className="text-gray-300">{part.trim()}</span>
                )}
             </div>
           ))}
           {statChanges.length === 0 && <span className="text-gray-500 text-sm">无属性变化</span>}
         </div>
       </div>
    </div>
  );
};