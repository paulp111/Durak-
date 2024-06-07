import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/StartScreen.css';

import durakLogo from '../assets/Red_star.svg.png';

const StartScreen: React.FC = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.body.classList.add('start-screen-active');
    if (audioRef.current) {
      audioRef.current.play();
    }
    return () => {
      document.body.classList.remove('start-screen-active');
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div className="start-screen">
      <div className="logo-container">
        <div className="glow"></div>
        <img src={durakLogo} alt="Durak Logo" className="start-logo" />
      </div>
      <div className="title">
        <h1>Дурак</h1>
        <h2>a Soviet card game</h2>
      </div>
      <div className="button-container">
        <a onClick={handleStartGame}><span>Play</span></a>
        <Link to="/howto"><span>How To</span></Link>
        <Link to="/settings"><span>Settings</span></Link>
        <Link to="/"><span>Exit</span></Link>
      </div>
    </div>
  );
};

export default StartScreen;
