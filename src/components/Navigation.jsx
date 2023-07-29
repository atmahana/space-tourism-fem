import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">DESTINATION</NavLink>
          </li>
          <li>
            <NavLink to="/crew">CREW</NavLink>
          </li>
          <li>
            <NavLink to="/technology">TECHNOLOGY</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
