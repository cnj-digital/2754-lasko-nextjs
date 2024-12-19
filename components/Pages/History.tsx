import CardsCta from "@/components/CardsCta";
import ContentGrid from "@/components/ContentGrid";
import ContentGridBackground from "@/components/ContentGridBackground";
import HeroImage from "@/components/HeroImage";
import HistoryTimeline from "@/components/HistoryTimeline";
import ImageSlider from "@/components/ImageSlider";
import InfoBanner from "@/components/InfoBanner";
import InfoSlider from "@/components/InfoSlider";
import VideoGrid from "@/components/VideoGrid";

export default function History({
  story_hero,
  story_history_title,
  story_history_sections,
  story_quote,
  story_timeline_items,
  story_quote_bottom,
  story_slider_title,
  story_slider_items,
  story_video_grid_title,
  story_video_grid_items,
  story_quality_title,
  story_quality_sections,
  story_how_title,
  story_how_copy,
  story_how_slides,
  promos_items,
}: any) {
  return (
    <div>
      <HeroImage
        title={story_hero.title}
        copy={story_hero.story_hero_content}
        buttons={story_hero.story_hero_ctas.map((cta: any) => ({
          title: cta.cta.title,
          url: cta.cta.link,
        }))}
        image="/zgodba.png"
      />
      <ContentGrid
        title={story_history_title}
        sectionTitle={story_history_sections[0].title}
        items={story_history_sections[0].items.map((item: any) => ({
          title: item.title,
          copy: item.copy,
          image: item.image.permalink,
        }))}
      />
      <InfoBanner copy={story_quote} />

      <HistoryTimeline
        timeline={story_timeline_items.map((item: any) => ({
          year: item.year,
          events: item.events.map((event: any) => ({
            title: event.title,
            description: event.description,
            image: event.image?.permalink,
            cta: event.cta,
          })),
        }))}
      />

      <InfoBanner copy={story_quote_bottom} />

      {story_slider_items && (
        <ImageSlider
          title={story_slider_title}
          images={story_slider_items.map((item: any) => ({
            description: item.description,
            url: item.image.permalink,
          }))}
        />
      )}

      <VideoGrid
        title={story_video_grid_title}
        videos={story_video_grid_items.map((item: any) => ({
          title: item.title,
          videoUrl: item.video,
        }))}
      />

      <ContentGridBackground
        title={story_quality_title}
        sections={story_quality_sections.map((section: any) => ({
          title: section.title,
          copy: section.copy,
          items: section.items.map((item: any) => ({
            title: item.title,
            copy: item.copy,
            image: item.image.permalink,
          })),
          type: section.orientation.value,
        }))}
      />

      <InfoSlider
        title={story_how_title}
        copy={story_how_copy}
        slides={story_how_slides.map((item: any) => ({
          title: item.title,
          copy: item.copy,
          numbers: item.numbers,
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
