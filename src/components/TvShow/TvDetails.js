import { useParams } from 'react-router';
import { Tabs } from '../feature/Tabs';
import { HeroDetails } from '../Hero/HeroDetails';
import { Nav } from '../Nav/Nav';

export function TvDetails() {
  const { id } = useParams();
  return (
    <>
      <Nav />
      <HeroDetails mediaType="tv" id={id} />
      <main>
        <Tabs mediaType="tv" />
      </main>
    </>
  );
}
