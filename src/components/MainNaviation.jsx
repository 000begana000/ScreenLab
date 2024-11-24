import { Link } from "react-router-dom";

export default function MainNaviation() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <Link to="/">ScreenLab</Link>
        </div>
        <div className="user-actions">
          <input type="text" name="" id="" />
          <button className="user-avatar">Login</button>
          <button className="language">EN</button>
        </div>
      </nav>
    </header>
  );
}
