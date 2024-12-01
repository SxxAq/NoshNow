import React from "react";
import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download-section">
      <div className="app-download-content">
        <h2>Get the NoshNow App</h2>
        <p>Enjoy seamless food ordering on the go</p>
        <div className="app-download-links">
          <a href="#" className="download-link">
            <img
              src={assets.play_store}
              alt="Google Play Store"
              className="store-badge"
            />
          </a>
          <a href="#" className="download-link">
            <img
              src={assets.app_store}
              alt="App Store"
              className="store-badge"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
