import React from 'react';
import { ArrowLeft, RefreshCw, Gamepad2, MessageCircle } from 'lucide-react';
import { Character } from '../types';

interface Props {
  character: Character;
  onBack: () => void;
  onSelect: () => void;
  onRandom: () => void;
}

export const CharacterSelection: React.FC<Props> = ({ character, onBack, onSelect, onRandom }) => {
  return (
    <div className="min-h-screen bg-festive-dark flex flex-col items-center justify-center p-4">
      
      {/* Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="flex items-center justify-center space-x-2 text-festive-gold">
          <div className="h-px w-8 bg-festive-gold"></div>
          <span className="text-xs tracking-widest uppercase">角色选择</span>
          <div className="h-px w-8 bg-festive-gold"></div>
        </div>
        <h2 className="text-3xl font-bold text-white">选择你的春节身份</h2>
      </div>

      {/* Card Container */}
      <div className="bg-[#FFF5E6] w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-2xl relative text-gray-800 border-4 border-yellow-200">
        
        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left: Avatar */}
          <div className="flex-shrink-0 relative mx-auto md:mx-0">
             <div className="relative w-48 h-48 md:w-56 md:h-56">
                {/* Decorative brackets */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-red-500 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-red-500 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-red-500 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-red-500 rounded-br-lg"></div>
                
                <img 
                  src={character.avatar} 
                  alt={character.name} 
                  className="w-full h-full object-cover rounded-xl border-2 border-yellow-300 shadow-inner bg-gray-200"
                />
             </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-4xl font-bold text-red-800 mb-1">{character.name}</h3>
              <div className="h-1 w-16 bg-yellow-400 mb-4"></div>
              
              {/* Role Badge */}
              <div className="inline-flex items-center bg-red-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md mb-3">
                <span className="mr-2">🎯</span>
                {character.roleDescription}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {character.tags.filter(t => t !== character.roleDescription).map((tag, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border ${i % 2 === 0 ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-green-100 text-green-800 border-green-300'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio Box */}
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 relative">
               <div className="flex items-center space-x-2 text-gray-500 mb-2">
                 <MessageCircle size={16} />
                 <span className="text-xs font-bold uppercase">人设独白</span>
               </div>
               <div className="w-1 h-full absolute left-0 top-0 bg-red-400 rounded-l-xl"></div>
               <p className="text-gray-600 text-sm leading-relaxed italic pl-2">
                 {character.bio}
               </p>
            </div>
            
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 w-full my-6"></div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button 
            onClick={onBack}
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center shadow-sm transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> 返回
          </button>
          
          <button 
            onClick={onRandom}
            className="px-6 py-3 rounded-xl bg-yellow-200 hover:bg-yellow-300 text-yellow-800 font-bold flex items-center shadow-sm transition-colors border border-yellow-400"
          >
            <RefreshCw size={18} className="mr-2" /> 换一个
          </button>

          <button 
            onClick={onSelect}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-3 rounded-xl shadow-lg border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center"
          >
            选择角色 <Gamepad2 size={20} className="ml-2" />
          </button>
        </div>

      </div>
      
      <div className="text-yellow-500/50 text-xs mt-8">
           — 每个角色都有独特的春节体验 —
      </div>
    </div>
  );
};