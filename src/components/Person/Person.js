import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import { getPerson, getSocialPerson, imageUrl } from "../api/api";
import styles from "./person.module.scss";
import { AllTabs } from "./AllTabs";

export function Person() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [social, setSocial] = useState(null);

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
      const social = await getSocialPerson(id);
      setActor(data);
      setSocial(social);
    }

    getData();
  }, [id]);

  if (!actor || !social) {
    return <h2>Loading...</h2>;
  }

  const currentYear = new Date().getFullYear();
  const birth = actor.birthday.split("-").reverse().join(".");

  return (
    <>
      <Nav />
      <section className="leftSpace">
        <section className={styles.personHero}>
          <img src={imageUrl("w370_and_h556_bestv2") + actor.profile_path} alt={actor.name} />
          <div className="abs">
            <div className={styles.actorDetails}>
              <h2>{actor.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: formatContent(actor.biography) }} />
            </div>
            <section className={styles.about}>
              <ul className={styles.list}>
                <li>
                  <div>Known for </div>
                  <div>{actor.known_for_department}</div>
                </li>
                <li>
                  <div>Born</div>
                  <div>
                    {birth} (age {currentYear - actor.birthday.split("-")[0]})
                  </div>
                </li>
                <li>
                  <div>Place of birth</div>
                  <div>{actor.place_of_birth}</div>
                </li>
              </ul>
              <ul className={styles.socialList}>
                <li>
                  <a href={`https://www.twitter.com/${social.twitter_id}/`}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      className="svg-inline--fa fa-twitter fa-w-16"
                      width="20"
                      height="20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#fff"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>{" "}
                  </a>
                </li>
                <li>
                  <a href={`https://www.imdb.com/title/${social.imdb_id}/`}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      width="20"
                      height="20"
                      data-icon="imdb"
                      className="svg-inline--fa fa-imdb fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#fff"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/${social.instagram_id}/`}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      width="20"
                      height="20"
                      className="svg-inline--fa fa-instagram fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#fff"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <div className={styles.spaceAround}>
          <AllTabs />
        </div>
      </section>
    </>
  );
}
