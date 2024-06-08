import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/StartScreen.css";
import videoSource from "../assets/vid12.mp4"; 
import hammerIcon from "../assets/hammer.svg"; 
import sickleIcon from "../assets/sickle.svg"; 

const StartScreen: React.FC = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    document.body.classList.add("start-screen-active");
    if (audioRef.current) {
      audioRef.current.play();
    }
    //SLOW DOWN VID
   // if (videoRef.current) {
   //   videoRef.current.playbackRate = 0.5; 
   //  }
    return () => {
      document.body.classList.remove("start-screen-active");
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <div className="start-screen">
      <video ref={videoRef} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="highlight-box"></div> {}
      <div className="logo-container">
        <div className="glow"></div>
        <svg className="start-logo neon-star" viewBox="0 0 200 200">
          <defs>
            <filter
              id="neonFilter"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="3"
                result="blur1"
              />
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur2"
              />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="neonGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff0000" />
              <stop offset="33%" stopColor="#ff5555" />
              <stop offset="66%" stopColor="#ffaaaa" />
              <stop offset="100%" stopColor="#ff0000" />
            </linearGradient>
          </defs>
          <path
            d="M100,10 L120,75 L185,75 L135,110 L155,175 L100,135 L45,175 L65,110 L15,75 L80,75 Z"
            className="neon-star-path"
          />
        </svg>
      </div>
      <div className="title">
        <h1>
          <img src={hammerIcon} alt="Hammer" className="icon hammer" />
          ДУРАК
          <img src={sickleIcon} alt="Sickle" className="icon sickle" />
        </h1>
        <h2>русская карточная игра</h2>
      </div>
      <div className="button-container">
        <div className="button-block">
          <a onClick={handleStartGame}>
            <span>Play</span>
          </a>
          <Link to="/howto">
            <span>How To</span>
          </Link>
        </div>
        <div className="button-block">
          <Link to="/settings">
            <span>Settings</span>
          </Link>
          <Link to="/">
            <span>Exit</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
