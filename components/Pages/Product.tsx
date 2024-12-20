import CardsCta from "@/components/CardsCta";
import HeroSlider from "@/components/HeroSlider";
import HeroSliderMobile from "@/components/HeroSliderMobile";

export default function Product({ product_items, promos_items }: any) {
  return (
    <div>
      <div className="hidden lg:block">
        <HeroSlider
          slides={product_items.map((item: any) => ({
            title: item.title,
            description: item.product_content,
            image: item.product_image.permalink,
            background: item.product_background.permalink,
            cta: item.cta,
            specs: item.product_table
              ? Object.entries(item.product_table).map(([key, value]) => ({
                  key,
                  value,
                }))
              : [],
          }))}
        />
      </div>
      <div className="lg:hidden">
        <HeroSliderMobile
          slides={product_items.map((item: any) => ({
            title: item.title,
            description: item.product_content,
            image: item.product_image.permalink,
            background: item.background_mobile?.permalink,
            cta: item.cta,
            specs: item.product_table
              ? Object.entries(item.product_table).map(([key, value]) => ({
                  key,
                  value,
                }))
              : [],
          }))}
        />
      </div>
      <CardsCta
        cards={promos_items.map((promo: any) => ({
          title: promo.title,
          copy: promo.description,
          cta: promo.cta?.title,
          url: promo.cta?.link,
          image: promo.asset.permalink,
        }))}
      />
    </div>
  );
}
