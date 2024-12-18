import CardsCta from "@/components/CardsCta";
import ExternalLinks from "@/components/ExternalLinks";
import HeroImage from "@/components/HeroImage";
import HorizontalCardGrid from "@/components/HorizontalCardGrid";
import { external_links } from "@/data/general";

export default function Support({
  hero_support,
  support_external_links_copy,
  support_external_links_title,
  support_support_title,
  support_support_copy,
  support_support_items,
  promos_items,
}: any) {
  return (
    <div>
      <HeroImage
        title={hero_support.title}
        copy={hero_support.support_hero_content}
        buttons={hero_support.support_hero_ctas.map((cta: any) => ({
          title: cta.cta.title,
          url: cta.cta.link,
        }))}
        image="/podpiramo.png"
      />

      <ExternalLinks
        links={external_links}
        title={support_external_links_title}
        copy={support_external_links_copy}
      />
      <HorizontalCardGrid
        title={support_support_title}
        copy={support_support_copy}
        cards={support_support_items.map((item: any) => ({
          title: item.cta.title,
          url: item.cta.link,
          image: item.cta.asset.permalink,
        }))}
      />
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
