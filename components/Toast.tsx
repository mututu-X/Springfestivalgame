import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  // We keep the timer for auto-close, but design it as a center modal
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500); // Shorter duration as it's a blocking-style feedback
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
       {/* Backdrop for contrast */}
       <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"></div>
       
       <div className="relative bg-black/80 text-white px-8 py-6 rounded-2xl shadow-2xl flex flex-col items-center animate-zoom-in border-2 border-festive-gold/50 transform scale-110">
         <div className="text-festive-gold text-xs font-bold uppercase tracking-widest mb-2">事件结算</div>
         <div className="flex flex-col items-center space-y-2">
           {message.split('|').map((part, i) => (
             <div key={i} className="text-xl md:text-2xl font-bold flex items-center space-x-2">
                {part.includes('+') ? (
                  <span className="text-green-400">{part.trim()}</span>
                ) : part.includes('-') ? (
                  <span className="text-red-400">{part.trim()}</span>
                ) : (
                  <span className="text-gray-300">{part.trim()}</span>
                )}
             </div>
           ))}
         </div>
       </div>
    </div>
  );
};