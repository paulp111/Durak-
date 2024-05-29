import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HowTo.css';

const HowTo: React.FC = () => {
  return (
    <div className="how-to">
      <h1>How To Play</h1>
      <p>Hier sind die Anweisungen, wie man Durak spielt...</p>
      <Link to="/">
        <button className="button">Zurück</button>
      </Link>
    </div>
  );
};

export default HowTo;
