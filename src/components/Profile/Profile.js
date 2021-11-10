import { Nav } from "../Nav/Nav";
import styles from "./profile.module.scss";

export function Profile() {
  return (
    <>
      <Nav />
      <main>
        <section className={styles.profile}>
          <h2>Edit Profile</h2>
          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" />
          </form>
        </section>
      </main>
    </>
  );
}
