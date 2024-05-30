import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameBoard from '../components/GameBoard';
import StartScreen from '../components/StartScreen';
import HowTo from '../components/HowTo';
import Settings from '../components/Settings';

interface AppRouterProps {
  toggleMusic: () => void;
  musicEnabled: boolean;
}

const AppRouter: React.FC<AppRouterProps> = ({ toggleMusic, musicEnabled }) => {
  return (
    <Router basename="/Durak-">  {/* Basename hinzugefügt */}
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/settings" element={<Settings toggleMusic={toggleMusic} musicEnabled={musicEnabled} />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
