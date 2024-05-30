import React, { useState, useEffect, useRef } from 'react';
import AppRouter from './routes/Router';
import './styles/main.css';

const App: React.FC = () => {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    setMusicEnabled(!musicEnabled);
    if (audioRef.current) {
      if (musicEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.error('Failed to play audio:', e));
      }
    }
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && musicEnabled) {
        audioRef.current.play().catch((e) => console.error('Failed to play audio:', e));
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [musicEnabled]);

  return (
    <>
      <audio ref={audioRef} src="/Durak-/assets/music1.mp3" loop />
      <AppRouter toggleMusic={toggleMusic} musicEnabled={musicEnabled} />
    </>
  );
};

export default App;
