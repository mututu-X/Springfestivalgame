import React from 'react';
import { StatKey } from '../types';

interface Props {
  icon: string;
  label: string;
  value: number;
  type: StatKey;
  max?: number;
  change?: number; // New prop to show temporary change
}

// Color mapping based on stat type
const getColor = (type: StatKey) => {
  switch (type) {
    case 'money': return 'text-yellow-400';
    case 'weight': return 'text-blue-300';
    case 'face': return 'text-orange-400';
    case 'san': return 'text-purple-300';
    case 'health': return 'text-red-400';
    case 'luck': return 'text-green-400';
    default: return 'text-gray-300';
  }
};

const getBarColor = (type: StatKey) => {
  switch (type) {
    case 'face': return 'bg-orange-500';
    case 'san': return 'bg-purple-500';
    case 'health': return 'bg-red-500';
    case 'luck': return 'bg-green-500';
    default: return 'bg-gray-400';
  }
}

export const StatBar: React.FC<Props> = ({ icon, label, value, type, max = 100, change }) => {
  const isSpecial = type === 'money' || type === 'weight';
  
  // Calculate percentage for progress bar, cap at 100%
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="bg-black/20 rounded-lg p-2 md:p-3 flex items-center justify-between shadow-sm backdrop-blur-sm relative overflow-hidden group">
      <div className="flex items-center space-x-2 w-1/3 z-10">
        <span className="text-xl filter drop-shadow-md">{icon}</span>
        <span className="text-gray-200 font-medium text-sm">{label}</span>
      </div>
      
      {isSpecial ? (
        <div className="flex-1 flex justify-end items-center space-x-2 z-10">
           {change !== undefined && change !== 0 && (
            <span className={`text-sm font-bold animate-bounce ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {change > 0 ? '+' : ''}{change}
            </span>
          )}
          <div className={`font-bold text-lg ${getColor(type)} text-right`}>
            {type === 'money' ? `¥${value.toLocaleString()}` : `${value}kg`}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center space-x-3 z-10">
          <div className="flex-1 h-3 bg-gray-800/50 rounded-full overflow-hidden border border-white/5 relative">
             <div 
               className={`h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(0,0,0,0.3)] ${getBarColor(type)}`} 
               style={{ width: `${percentage}%` }}
             ></div>
          </div>
          <div className="w-16 flex justify-end items-center space-x-1">
             {change !== undefined && change !== 0 && (
                <span className={`text-xs font-bold animate-pulse ${change > 0 ? 'text-green-400' : 'text-red-400'} absolute -top-1 right-2`}>
                  {change > 0 ? '+' : ''}{change}
                </span>
             )}
             <span className={`font-bold text-right ${getColor(type)}`}>{value}</span>
          </div>
        </div>
      )}
    </div>
  );
};