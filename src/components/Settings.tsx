import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);

  const handleMusicToggle = () => {
    setMusicEnabled(!musicEnabled);
  };

  const handleSoundEffectsToggle = () => {
    setSoundEffectsEnabled(!soundEffectsEnabled);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-option">
        <label>Music</label>
        <button onClick={handleMusicToggle}>
          {musicEnabled ? 'Disable' : 'Enable'}
        </button>
      </div>
      <div className="settings-option">
        <label>Sound Effects</label>
        <button onClick={handleSoundEffectsToggle}>
          {soundEffectsEnabled ? 'Disable' : 'Enable'}
        </button>
      </div>
      <div className="settings-option">
        <label>Difficulty</label>
        <select>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button onClick={() => navigate('/')}>Zurück</button>
    </div>
  );
};

export default Settings;
