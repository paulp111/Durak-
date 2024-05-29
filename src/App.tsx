import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import StartScreen from './components/StartScreen';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="container mx-auto p-4">
      {gameStarted ? (
        <GameBoard />
      ) : (
        <StartScreen onStart={handleStartGame} />
      )}
    </div>
  );
};

export default App;
