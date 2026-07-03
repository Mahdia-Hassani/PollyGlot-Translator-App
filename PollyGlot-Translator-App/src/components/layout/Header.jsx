import "./Header.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="PollyGlot logo" className="header-logo" />

        <div className="header-text">
          <h1>PollyGlot</h1>
          <p>Perfect Translation Every Time</p>
        </div>
      </div>
    </header>
  );
}
