import CardsCta from "@/components/CardsCta";
import DisclousureCards from "@/components/DisclosureCards";
import HeroImage from "@/components/HeroImage";

export default async function Archive({ articles, title, promos_items }: any) {
  return (
    <div>
      <HeroImage title={title} />
      <DisclousureCards articles={articles} />
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
