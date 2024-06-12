import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";

interface SettingsProps {
  toggleMusic: () => void;
  musicEnabled: boolean;
}

const Settings: React.FC<SettingsProps> = ({ toggleMusic, musicEnabled }) => {
  const navigate = useNavigate();

  return (
    <div className="settings">
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-option">
          <label>Music</label>
          <button className="option-button" onClick={toggleMusic}>
            {musicEnabled ? "Disable" : "Enable"}
          </button>
        </div>
        <div className="settings-option">
          <label>Sound Effects</label>
          <button className="option-button">
            Disable
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
        <button className="back-button" onClick={() => navigate("/")}>
          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;
