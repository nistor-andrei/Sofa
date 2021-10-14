import home from "../../../assets/icons/home.svg";
import movie from "../../../assets/icons/clapperboard.svg";
import tv from "../../../assets/icons/XMLID_1988_.svg";
import search from "../../../assets/icons/loupe.svg";
import styles from "../home.module.scss";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.childnav}>
        <li>
          <a href="/">
            <img src={home} alt="home" />
          </a>
        </li>
        <li>
          <a href="/movie">
            <img src={movie} alt="movie" />
          </a>
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
