import { Known } from "./Tabs/Known";
import { Credits } from "./Tabs/Credits";
import { Photos } from "./Tabs/Photos";
import { useState } from "react";
import styles from "./alltabs.module.scss";

export function AllTabs() {
  const [tab, setTab] = useState("known");

  return (
    <article>
      <ul className={styles.tabs}>
        <li
          className={tab === "known" ? styles.active : ""}
          onClick={() => {
            setTab("known");
          }}
        >
          Known for
        </li>
        <li
          className={tab === "credits" ? styles.active : ""}
          onClick={() => {
            setTab("credits");
          }}
        >
          Credits
        </li>
        <li
          className={tab === "photos" ? styles.active : ""}
          onClick={() => {
            setTab("photos");
          }}
        >
          Photos
        </li>
      </ul>
      <div className={styles.outlet}>{(tab === "known" && <Known />) || (tab === "credits" && <Credits />) || (tab === "photos" && <Photos />)}</div>
    </article>
  );
}
