import home from '../../assets/icons/home.svg';
import movie from '../../assets/icons/clapperboard.svg';
import tv from '../../assets/icons/XMLID_1988_.svg';
import search from '../../assets/icons/loupe.svg';
import styles from './nav.module.scss';
import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.childnav}>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <img src={home} alt="home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie">
              <img src={movie} alt="movie" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/tv">
              <img src={tv} alt="tv" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <img src={search} alt="search" />
            </NavLink>
          </li>
          <li>
            <p>Admin</p>
          </li>
        </ul>
      </nav>
    </>
  );
}
