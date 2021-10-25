import home from "../../../assets/icons/home.svg";
import movie from "../../../assets/icons/clapperboard.svg";
import tv from "../../../assets/icons/XMLID_1988_.svg";
import search from "../../../assets/icons/loupe.svg";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.childnav}>
        <li>
          <NavLink exact activeClassName="active" to="/">
            <img src={home} alt="home" />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/movie">
            <img src={movie} alt="movie" />
          </NavLink>
        </li>
        <li>
          <a href="/tv">
            <img src={tv} alt="tv" />
          </a>
        </li>
        <li>
          <a href="/search">
            <img src={search} alt="search" />
          </a>
        </li>
        <li>
          <p>Admin</p>
        </li>
      </ul>
    </nav>
  );
}
