import React, { useState, useEffect, useRef } from "react";
import AppRouter from "./routes/Router";
import "./styles/main.css";
import videoSource from "./assets/vid.mp4"; 
import clickSound from "./assets/click.mp3"; 

const App: React.FC = () => {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [clickSoundEnabled, setClickSoundEnabled] = useState(true); 
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null); 
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  const toggleClickSound = () => {
    setClickSoundEnabled(!clickSoundEnabled);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (musicEnabled) {
        audioRef.current
          .play()
          .catch((e) => console.error("Failed to play audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicEnabled]);

  useEffect(() => {
    if (audioRef.current && musicEnabled) {
      audioRef.current
        .play()
        .catch((e) => console.error("Failed to play audio:", e));
    }
  }, []);

  const playClickSound = () => {
    if (clickSoundEnabled && clickAudioRef.current) {
      clickAudioRef.current.play();
    }
  };

  return (
    <div className="app-container">
      <video ref={videoRef} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}src/assets/ambient.mp3`}
        loop
      />
      <audio ref={clickAudioRef} src={clickSound} /> {/* Click sound audio */}
      <AppRouter
        toggleMusic={toggleMusic}
        musicEnabled={musicEnabled}
        toggleClickSound={toggleClickSound} 
        clickSoundEnabled={clickSoundEnabled} 
        playClickSound={playClickSound} 
      />
    </div>
  );
};

export default App;
