import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/StartScreen.css';

import durakLogo from '../assets/durak.png';
import playButton from '../assets/play.png';
import howButton from '../assets/how.png';
import settingsButton from '../assets/settings.png';
import exitButton from '../assets/exit.png';

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
      <img src={durakLogo} alt="Durak Logo" className="logo" />
      <img src={playButton} alt="Play Button" className="button" onClick={handleStartGame} />
      <Link to="/howto">
        <img src={howButton} alt="How To Button" className="button" />
      </Link>
      <Link to="/settings">
        <img src={settingsButton} alt="Settings Button" className="button" />
      </Link>
      <Link to="/">
        <img src={exitButton} alt="Exit Button" className="button" />
      </Link>
    </div>
  );
};

export default StartScreen;
