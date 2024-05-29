import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Settings.css';

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <p>Hier können Sie die Spieleinstellungen ändern...</p>
      <Link to="/">
        <button className="button">Zurück</button>
      </Link>
    </div>
  );
};

export default Settings;
