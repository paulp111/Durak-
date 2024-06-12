import React, { useState, useEffect, useRef } from "react";
import AppRouter from "./routes/Router";
import "./styles/main.css";
import videoSource from "./assets/vid.mp4"; // Import the video file

const App: React.FC = () => {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  return (
    <div className="app-container">
      <video ref={videoRef} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}src/assets/music1.mp3`}
        loop
      />
      <AppRouter toggleMusic={toggleMusic} musicEnabled={musicEnabled} />
    </div>
  );
};

export default App;
