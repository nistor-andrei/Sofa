import home from '../../assets/icons/home.svg';
import movie from '../../assets/icons/clapperboard.svg';
import tv from '../../assets/icons/XMLID_1988_.svg';
import search from '../../assets/icons/loupe.svg';
import styles from './nav.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext.context';
import avatarPlaceholder from '../../assets/image/Group 3413.png';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isJwtExpired } from 'jwt-check-expiration';

export function Nav() {
  const [user, setUser] = useState({});
  const { auth, logout } = useAuth();
  const [popover, setPopover] = useState(false);
  const history = useHistory();
  const ref = useRef();

  useEffect(() => {
    if (isJwtExpired(auth.accessToken)) {
      logout();
      history.push('/login');
    }
    fetch(`http://localhost:3001/users/${auth.user.id}`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [auth.accessToken, auth.user.id, history, logout]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (popover && ref.current && !ref.current.contains(e.target)) {
        setPopover(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [popover]);

  function handleClick(e) {
    e.preventDefault();
    setPopover(!popover);
  }
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
            <button className={styles.accountButton} onClick={handleClick}>
              <img src={user.url ? user.url : avatarPlaceholder} alt="avatar" className={styles.user} />
              <p>{user.firstname}</p>
              {popover && (
                <nav className={styles.popover} ref={ref}>
                  <Link to="/profile" className={styles.popoverItem}>
                    Profile
                  </Link>
                  <Link to="/login" className={styles.popoverItem} onClick={() => logout()}>
                    Sign out
                  </Link>
                </nav>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
