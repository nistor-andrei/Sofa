import { useParams } from "react-router";
import { Tabs } from "../feature/Tabs";
import { HeroDetails } from "../Hero/HeroDetails";
import { Nav } from "../Nav/Nav";

export function MovieDetails() {
  const { id } = useParams();
  return (
    <>
      <Nav />
      <HeroDetails mediaType="movie" id={id} />
      <main>
        <Tabs />
      </main>
    </>
  );
}
