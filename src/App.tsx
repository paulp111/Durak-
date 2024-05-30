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
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (musicEnabled) {
        audioRef.current.play().catch((e) => console.error('Failed to play audio:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicEnabled]);

  useEffect(() => {
    if (audioRef.current && musicEnabled) {
      audioRef.current.play().catch((e) => console.error('Failed to play audio:', e));
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/Durak-/src/assets/music1.mp3" loop />
      <AppRouter toggleMusic={toggleMusic} musicEnabled={musicEnabled} />
    </>
  );
};

export default App;
