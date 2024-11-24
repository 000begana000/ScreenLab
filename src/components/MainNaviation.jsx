import { Link } from "react-router-dom";

import classes from "./MainNaviation.module.css";

export default function MainNaviation() {
  return (
    <header className={classes.nav}>
      <div className={classes.logo}>
        <p>
          <Link to="/">ScreenLab</Link>
        </p>
      </div>
      <div className={classes.userAction}>
        <input type="text" name="" id="" className={classes.search} />
        <button className={classes.login}>Login</button>
        <button className={classes.language}>EN</button>
      </div>
    </header>
  );
}
