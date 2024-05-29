import React from 'react';
import GameBoard from './components/GameBoard';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <GameBoard />
    </div>
  );
};

export default App;
