import CardsCta from "@/components/CardsCta";
import ExternalLinks from "@/components/ExternalLinks";
import HeroLanding from "@/components/HeroLanding";
import NewsSection from "@/components/NewsSection";
import { external_links } from "@/data/general";

export default async function Home({
  articles,
  hero,
  external_links_items,
  promos_items,
}: any) {
  return (
    <div className="flex flex-col items-center">
      <HeroLanding
        backgroundUrl={hero.background.permalink}
        title={hero.title}
        cta={hero.cta}
        isVideo={hero.background.is_video}
      />
      {external_links_items && (
        <ExternalLinks
          links={external_links}
          pageLinks={
            external_links_items
              ? external_links_items.map((link: any) => ({
                  title: link.cta.title,
                  image: link.cta.asset.permalink,
                  url: link.cta.link,
                }))
              : []
          }
        />
      )}
      <NewsSection news={articles} />
      <CardsCta
        cards={promos_items.map((promo: any) => ({
          title: promo.title,
          copy: promo.description,
          cta: promo.cta.title,
          url: promo.cta.link,
          image: promo.asset.permalink,
        }))}
      />
    </div>
  );
}
