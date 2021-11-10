import home from "../../assets/icons/home.svg";
import movie from "../../assets/icons/clapperboard.svg";
import tv from "../../assets/icons/XMLID_1988_.svg";
import search from "../../assets/icons/loupe.svg";
import styles from "./nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext.context";
import avatarPlaceholder from "../../assets/image/Group 3413.png";
import { useEffect, useRef, useState } from "react";

export function Nav() {
  const { auth } = useAuth();
  const [popover, setPopover] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (popover && ref.current && !ref.current.contains(e.target)) {
        setPopover(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
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
              <img src={avatarPlaceholder} alt="avatar" className={styles.user} />
              <p>{auth.firstname}</p>
              {popover && (
                <nav className={styles.popover} ref={ref}>
                  <Link to="/profile" className={styles.popoverItem}>
                    Profile
                  </Link>
                  <a href="/" className={styles.popoverItem}>
                    Sign out
                  </a>
                </nav>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
