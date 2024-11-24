import { NavLink } from "react-router-dom";

export default function MainNaviation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* Home */}
            <NavLink to="/">ScreenLab</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
