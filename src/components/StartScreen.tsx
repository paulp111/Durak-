import React from 'react';
import '../styles/StartScreen.css';  

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1>Durak Game</h1>
      <button onClick={onStart}>
        Play
      </button>
    </div>
  );
};

export default StartScreen;
