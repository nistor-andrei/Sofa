import { Link, useLocation } from "react-router-dom";
import styles from "./auth.module.scss";
import logo from "../../assets/icons/surface1.svg";
import { useState } from "react";

function Nav() {
  return <img src={logo} alt="logo" className={styles.logo} />;
}
export function Auth() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    "retype-password": "",
  });

  let isLogin = false;
  const location = useLocation();
  if (location.pathname.includes("login")) {
    isLogin = true;
  }

  function handleChange(e) {
    const newValue = { ...values };
    newValue[e.target.name] = e.target.value;

    setValues(newValue);
  }

  return (
    <section className={styles.login}>
      <div className={styles.opacity}>
        <Nav />
        <div className={styles.center}>
          <div className={styles.box}>
            <h2>{isLogin ? "Sign in" : "Sign up"}</h2>
            <form>
              <input type="text" placeholder="Email" name="email" value={values.email} className={styles.input} onChange={handleChange} />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                className={styles.input}
                onChange={handleChange}
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Retype Password"
                  value={values["retype-password"]}
                  name="retype-password"
                  className={styles.input}
                  onChange={handleChange}
                />
              )}
              <button type="submit" className={styles.button}>
                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </form>
            <p className={styles.paragraph}>
              New to Sofa? <Link to="/register">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
