import HeroAndResources from "@/components/HeroAndResources";
import LatestNews from "@/components/LatestNews";
import { getHeroConfig } from "@/lib/noticias";

export default function HomePage() {
  const heroConfig = getHeroConfig();

  return (
    <>
      <HeroAndResources heroConfig={heroConfig} />
      <LatestNews />
    </>
  );
}
