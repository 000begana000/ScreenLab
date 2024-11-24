import { Link } from "react-router-dom";
import classes from "./MainNaviation.module.css";

export default function MainNaviation() {
  return (
    <header>
      <nav className={classes.nav}>
        <div className="logo">
          <p>
            <Link to="/">ScreenLab</Link>
          </p>
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
