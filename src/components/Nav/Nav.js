import home from '../../assets/icons/home.svg';
import movie from '../../assets/icons/clapperboard.svg';
import tv from '../../assets/icons/XMLID_1988_.svg';
import search from '../../assets/icons/loupe.svg';
import styles from './nav.module.scss';
import { NavLink } from 'react-router-dom';
import { FormSearch } from '../feature/FormSearch';
import { useState } from 'react';

export function Nav() {
  const [openSearch, setOpenSearch] = useState(false);

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
            <a
              href="/search"
              onClick={(e) => {
                e.preventDefault();
                setOpenSearch(!openSearch);
              }}
            >
              <img src={search} alt="search" />
            </a>
          </li>
          <li>
            <p>Admin</p>
          </li>
        </ul>
      </nav>
      {openSearch && <FormSearch closeSearch={openSearch} />}
    </>
  );
}
