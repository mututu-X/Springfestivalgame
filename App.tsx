import React, { useState, useEffect } from 'react';
import { GameState, ScreenState, Stats, Character, Choice } from './types';
import { CHARACTERS, CHARACTER_EVENTS, CHARACTER_ENDINGS, ACHIEVEMENTS } from './data/gameData';
import { MainMenu } from './components/MainMenu';
import { CharacterSelection } from './components/CharacterSelection';
import { AttributeAdjustment } from './components/AttributeAdjustment';
import { StoryGame } from './components/StoryGame';
import { EndingScreen } from './components/EndingScreen';
import { AchievementScreen } from './components/AchievementScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    screen: 'MAIN_MENU',
    selectedCharacterId: null,
    currentStats: { money: 0, weight: 0, face: 0, san: 0, health: 0, luck: 0 },
    currentEventIndex: 0,
    history: [],
    unlockedAchievements: [],
    hasNegativeMoneyRecord: false,
    hasRecoveredMoneyRecord: false,
  });

  // Load unlocked achievements from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('sfx3_achievements');
    if (saved) {
      setGameState(prev => ({ ...prev, unlockedAchievements: JSON.parse(saved) }));
    }
  }, []);

  const saveAchievements = (ids: string[]) => {
    localStorage.setItem('sfx3_achievements', JSON.stringify(ids));
  };

  const getCharacter = (): Character => {
    // If selectedCharacterId is set, find that character
    if (gameState.selectedCharacterId) {
       return CHARACTERS.find(c => c.id === gameState.selectedCharacterId) || CHARACTERS[0];
    }
    // Default to the first character if none selected (e.g. during initial render or fallback)
    return CHARACTERS[0];
  };

  const getCharacterEvents = () => {
    const charId = gameState.selectedCharacterId || CHARACTERS[0].id;
    return CHARACTER_EVENTS[charId] || [];
  };

  const getCharacterEndings = () => {
    const charId = gameState.selectedCharacterId || CHARACTERS[0].id;
    return CHARACTER_ENDINGS[charId] || [];
  };

  // --- Actions ---

  const handleStartGame = () => {
    // Randomly pick a character to start showing in selection screen if not already set
    // or just default to first one. Let's just set screen to CHARACTER_SELECT and let it use current or default.
    const initialCharId = gameState.selectedCharacterId || CHARACTERS[0].id;
    setGameState(prev => ({ 
      ...prev, 
      screen: 'CHARACTER_SELECT',
      selectedCharacterId: initialCharId
    }));
  };

  const handleSelectCharacter = () => {
    // Set initial stats based on character
    const char = getCharacter();
    setGameState(prev => ({ 
      ...prev, 
      screen: 'ATTRIBUTE_ADJUST',
      selectedCharacterId: char.id,
      currentStats: { ...char.baseStats }
    }));
  };

  const handleRandomCharacter = () => {
    // Pick a random character that is NOT the current one
    const currentId = gameState.selectedCharacterId;
    const available = CHARACTERS.filter(c => c.id !== currentId);
    
    // If only one character exists, this logic falls back safely
    if (available.length === 0) return;

    const nextChar = available[Math.floor(Math.random() * available.length)];
    setGameState(prev => ({ ...prev, selectedCharacterId: nextChar.id }));
  };

  const handleUpdateStats = (newStats: Stats) => {
    setGameState(prev => ({ ...prev, currentStats: newStats }));
  };

  const handleBeginStory = () => {
    setGameState(prev => ({
      ...prev,
      screen: 'GAME_LOOP',
      currentEventIndex: 0,
      history: [],
      hasNegativeMoneyRecord: false,
      hasRecoveredMoneyRecord: false
    }));
  };

  const checkAchievements = (prevStats: Stats, newStats: Stats, currentAchvs: string[], recordNeg: boolean, recordRec: boolean) => {
    const newUnlocked = [...currentAchvs];
    let newNeg = recordNeg;
    let newRec = recordRec;

    // 1. Wallet Kill: Money goes positive -> negative
    if (prevStats.money >= 0 && newStats.money < 0 && !newUnlocked.includes('wallet_kill')) {
      newUnlocked.push('wallet_kill');
      newNeg = true;
    }

    // Update negative record even if achievement already unlocked (for bounce back logic)
    if (newStats.money < 0) newNeg = true;

    // 2. Bounce Back: Money goes negative -> positive
    if (newNeg && prevStats.money < 0 && newStats.money > 0 && !newUnlocked.includes('bounce_back')) {
      newUnlocked.push('bounce_back');
      newRec = true;
    }

    // 3. Koi: Luck >= 90
    if (newStats.luck >= 90 && !newUnlocked.includes('koi')) {
      newUnlocked.push('koi');
    }

    if (newUnlocked.length !== currentAchvs.length) {
      saveAchievements(newUnlocked);
    }

    return { newUnlocked, newNeg, newRec };
  };

  const handleChoiceMade = (choice: Choice) => {
    const prevStats = { ...gameState.currentStats };
    const impact = choice.impact;
    
    const newStats: Stats = {
      money: prevStats.money + (impact.money || 0),
      weight: prevStats.weight + (impact.weight || 0),
      face: prevStats.face + (impact.face || 0),
      san: prevStats.san + (impact.san || 0),
      health: prevStats.health + (impact.health || 0),
      luck: prevStats.luck + (impact.luck || 0),
    };

    // Check Achievements
    const { newUnlocked, newNeg, newRec } = checkAchievements(
      prevStats, 
      newStats, 
      gameState.unlockedAchievements,
      gameState.hasNegativeMoneyRecord,
      gameState.hasRecoveredMoneyRecord
    );

    const nextIndex = gameState.currentEventIndex + 1;
    const currentEvents = getCharacterEvents();
    
    // Check if game over
    if (nextIndex >= currentEvents.length) {
      // Calculate ending
      setGameState(prev => ({
        ...prev,
        currentStats: newStats,
        history: [...prev.history, choice.id],
        unlockedAchievements: newUnlocked,
        hasNegativeMoneyRecord: newNeg,
        hasRecoveredMoneyRecord: newRec,
        screen: 'ENDING'
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentStats: newStats,
        currentEventIndex: nextIndex,
        history: [...prev.history, choice.id],
        unlockedAchievements: newUnlocked,
        hasNegativeMoneyRecord: newNeg,
        hasRecoveredMoneyRecord: newRec,
      }));
    }
  };

  const getEnding = () => {
    const stats = gameState.currentStats;
    const currentEndings = getCharacterEndings();
    // Find first matching ending condition (order in array matters for priority)
    return currentEndings.find(e => e.condition(stats)) || currentEndings[currentEndings.length - 1];
  };

  // --- Render ---

  switch (gameState.screen) {
    case 'MAIN_MENU':
      return <MainMenu onStart={handleStartGame} onAchievements={() => setGameState(p => ({...p, screen: 'ACHIEVEMENTS'}))} />;
    
    case 'CHARACTER_SELECT':
      return (
        <CharacterSelection 
          character={getCharacter()} 
          onBack={() => setGameState(p => ({...p, screen: 'MAIN_MENU'}))}
          onSelect={handleSelectCharacter}
          onRandom={handleRandomCharacter}
        />
      );

    case 'ATTRIBUTE_ADJUST':
      return (
        <AttributeAdjustment 
          character={getCharacter()}
          currentStats={gameState.currentStats}
          onUpdateStats={handleUpdateStats}
          onBack={() => setGameState(p => ({...p, screen: 'CHARACTER_SELECT'}))}
          onStartGame={handleBeginStory}
        />
      );

    case 'GAME_LOOP':
      return (
        <StoryGame 
          character={getCharacter()}
          currentStats={gameState.currentStats}
          event={getCharacterEvents()[gameState.currentEventIndex]}
          onChoiceMade={handleChoiceMade}
        />
      );

    case 'ENDING':
      return (
        <EndingScreen 
          character={getCharacter()}
          finalStats={gameState.currentStats}
          ending={getEnding()}
          onRestart={() => setGameState(p => ({...p, screen: 'MAIN_MENU'}))}
        />
      );

    case 'ACHIEVEMENTS':
      return (
        <AchievementScreen 
          achievements={ACHIEVEMENTS}
          unlockedIds={gameState.unlockedAchievements}
          onBack={() => setGameState(p => ({...p, screen: 'MAIN_MENU'}))}
        />
      );

    default:
      return <div>Error: Unknown Screen</div>;
  }
};

export default App;