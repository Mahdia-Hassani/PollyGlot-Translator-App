import "./Header.css";

import logo from "../../assets/images/logo.png";
import worldMap from "../../assets/images/World Map 1 (1).png";

export default function Header() {
  return (
    <header className="header">
      <img src={worldMap} alt="" className="world-map" />

      <div className="header-content">
        <img src={logo} alt="PollyGlot Logo" className="header-logo" />

        <div className="header-text">
          <h1>PollyGlot</h1>
          <p>Perfect Translation Every Time</p>
        </div>
      </div>
    </header>
  );
}
