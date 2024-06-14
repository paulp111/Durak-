import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";

interface SettingsProps {
  toggleMusic: () => void;
  musicEnabled: boolean;
  toggleClickSound: () => void;
  clickSoundEnabled: boolean;
  playClickSound: () => void;
}

const Settings: React.FC<SettingsProps> = ({
  toggleMusic,
  musicEnabled,
  toggleClickSound,
  clickSoundEnabled,
  playClickSound,
}) => {
  const navigate = useNavigate();

  return (
    <div className="settings">
      <div className="highlight-box"></div>
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-option">
          <label>Music</label>
          <button className="option-button" onClick={toggleMusic}>
            {musicEnabled ? "Disable" : "Enable"}
          </button>
        </div>
        <div className="settings-option">
          <label>Click Sound</label>
          <button className="option-button" onClick={toggleClickSound}>
            {clickSoundEnabled ? "Disable" : "Enable"}
          </button>
        </div>
        <div className="settings-option">
          <label>Difficulty</label>
          <select className="option-select">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          className="back-button"
          onClick={() => {
            playClickSound();
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Settings;
