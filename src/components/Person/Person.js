import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import { getPerson, imageUrl } from "../api/api";
import styles from "./person.module.scss";

export function Person() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  function formatContent(string) {
    return string
      .split("\n")
      .filter((section) => section !== "")
      .map((section) => `<p>${section}</p>`)
      .join("");
  }

  useEffect(() => {
    async function getData() {
      const data = await getPerson(id);
      setActor(data);
    }

    getData();
  }, [id]);

  console.log(actor);

  if (!actor) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Nav />
      <section className="leftSpace">
        <section className={styles.personHero}>
          <img src={imageUrl("w370_and_h556_bestv2") + actor.profile_path} alt={actor.name} />
          <div className={styles.actorDetails}>
            <h2>{actor.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: formatContent(actor.biography) }} />
          </div>
        </section>
      </section>
    </>
  );
}
