import { useState } from "react";
import { useAuth } from "../Auth/AuthContext.context";
import { Nav } from "../Nav/Nav";
import styles from "./profile.module.scss";

export function Profile() {
  const { auth } = useAuth();
  const [profile, setProfile] = useState({
    firstname: auth.user.firstname,
    email: auth.user.email,
  });

  async function handleSubmit(e) {
    const updated = { firstname: profile.firstname, email: profile.email };
    await fetch(`http://localhost:3001/users/${auth.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
      body: JSON.stringify(updated),
    }).then((res) => res.json());
  }

  function handleChange(e) {
    const newValue = { ...profile };
    newValue[e.target.name] = e.target.value;
    setProfile(newValue);
  }

  return (
    <>
      <Nav />
      <main>
        <section className={styles.profile}>
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={profile.firstname} name="firstname" onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={profile.email} name="email" onChange={handleChange} />
            <button className={styles.sendButton}>Edit</button>
          </form>
        </section>
      </main>
    </>
  );
}
