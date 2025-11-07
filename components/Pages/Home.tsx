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
  globals,
}: any) {
  return (
    <div className="flex flex-col items-center">
      <HeroLanding
        backgroundUrl={hero.background.permalink}
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
        isVideo={hero.background.is_video}
        banner={{
          textleft: globals.banner_text_left_desktop,
          textright: globals.banner_text_right_desktop,
          textmobile: globals.banner_text_mobile,
          link: globals.banner_link,
        }}
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
      <NewsSection news={articles} loadMore={globals.news_load_more} />
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
