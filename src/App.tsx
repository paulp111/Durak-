import React from 'react';
import AppRouter from './routes/Router';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <AppRouter />
    </div>
  );
};

export default App;