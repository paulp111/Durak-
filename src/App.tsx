import React from 'react';
import AppRouter from './routes/Router';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <AppRouter />
    </div>
  );
};

export default App;
