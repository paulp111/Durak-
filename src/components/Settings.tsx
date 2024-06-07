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
      <h1>Settings</h1>
      <div className="settings-option">
        <label>Music</label>
        <button onClick={toggleMusic}>
          {musicEnabled ? "Disable" : "Enable"}
        </button>
      </div>
      <div className="settings-option">
        <label>Sound Effects</label>
        <button>
          {/*----------------------- Sound effects logic ---------------------*/}
          Disable
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
      <button onClick={() => navigate("/")}>Zurück</button>
    </div>
  );
};

export default Settings;
