import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameBoard from '../components/GameBoard';
import StartScreen from '../components/StartScreen';
import HowTo from '../components/HowTo';
import Settings from '../components/Settings';

const AppRouter: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
