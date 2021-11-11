import { Link, useLocation, useHistory } from "react-router-dom";
import styles from "./auth.module.scss";
import logo from "../../assets/icons/surface1.svg";
import danger from "../../assets/icons/warning_white_24dp.svg";
import { useState } from "react";
import { useAuth } from "./AuthContext.context";

function Nav() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
}
export function Auth() {
  const history = useHistory();
  const { auth, login } = useAuth();
  const location = useLocation();

  const [values, setValues] = useState({
    email: "",
    password: "",
    "retype-password": "",
    firstname: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    "retype-password": "",
    firstname: "",
  });

  const [apiError, setApiError] = useState("");

  if (auth) {
    history.push("/");
    return null;
  }

  let isLogin = false;
  if (location.pathname.includes("login")) {
    isLogin = true;
  }

  function handleChange(e) {
    const newValue = { ...values };
    newValue[e.target.name] = e.target.value;
    const newErrors = { ...errors };
    newErrors[e.target.name] = "";

    setValues(newValue);
    setErrors(newErrors);
    setApiError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    const loginForm = { email: values.email, password: values.password };
    const register = {
      email: values.email,
      password: values.password,
      firstname: values.firstname,
    };
    let sendData;
    if (isLogin) {
      sendData = loginForm;
    } else {
      sendData = register;
    }
    const data = await fetch(`http://localhost:3001/${isLogin ? "login" : "register"}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(sendData),
    }).then((res) => res.json());
    if (data.accessToken) {
      login(data);
      let to = "/";
      if (location.state?.from) {
        to = location.state.from.pathname + location.state.from.search;
      }
      history.push(to);
      return null;
    } else {
      setApiError(data);
    }
  }

  function isFormValid() {
    let isValid = true;
    let newErrors = { ...errors };

    if (!values.email) {
      isValid = false;
      newErrors.email = "Please enter your email";
    }

    if (!values.password) {
      isValid = false;
      newErrors.password = "Please choose a password";
    }

    if (!isLogin && !values.firstname) {
      isValid = false;
      newErrors.firstname = "Please enter your name";
    }
    if (!isLogin && values.password !== values["retype-password"]) {
      isValid = false;
      newErrors["retype-password"] = "Your passwords did not match";
    }

    setErrors(newErrors);

    return isValid;
  }
  return (
    <section className={styles.login}>
      <div className={styles.opacity}>
        <Nav />
        <div className={styles.center}>
          <div className={styles.box}>
            <h2>{isLogin ? "Sign in" : "Sign up"}</h2>
            <form onSubmit={handleSubmit}>
              {errors && <p className={styles.danger}>{errors.email}</p>}
              <input type="text" placeholder="Email" name="email" value={values.email} className={styles.input} onChange={handleChange} />
              {errors && <p className={styles.danger}>{errors.password}</p>}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                className={styles.input}
                onChange={handleChange}
              />
              {!isLogin && (
                <>
                  <input
                    type="password"
                    placeholder="Retype Password"
                    value={values["retype-password"]}
                    name="retype-password"
                    className={styles.input}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Your name"
                    value={values.firstname}
                    name="firstname"
                    className={styles.input}
                    onChange={handleChange}
                  />
                </>
              )}
              <button type="submit" className={styles.button}>
                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </form>
            <p className={styles.paragraph}>
              New to Sofa? <Link to="/register">Click here</Link>
            </p>
            {apiError && (
              <div className={styles.alert}>
                <img src={danger} width="30px" className={styles.dangersign} alt="alert" />
                {apiError}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
