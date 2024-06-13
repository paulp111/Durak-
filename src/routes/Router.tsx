import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameBoard from "../components/GameBoard";
import StartScreen from "../components/StartScreen";
import HowTo from "../components/HowTo";
import Settings from "../components/Settings";

interface AppRouterProps {
  toggleMusic: () => void;
  musicEnabled: boolean;
  toggleClickSound: () => void;
  clickSoundEnabled: boolean;
  playClickSound: () => void;
}

const AppRouter: React.FC<AppRouterProps> = ({
  toggleMusic,
  musicEnabled,
  toggleClickSound,
  clickSoundEnabled,
  playClickSound,
}) => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<StartScreen playClickSound={playClickSound} />} />
        <Route path="/howto" element={<HowTo playClickSound={playClickSound} />} />
        <Route
          path="/settings"
          element={
            <Settings
              toggleMusic={toggleMusic}
              musicEnabled={musicEnabled}
              toggleClickSound={toggleClickSound}
              clickSoundEnabled={clickSoundEnabled}
              playClickSound={playClickSound}
            />
          }
        />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
