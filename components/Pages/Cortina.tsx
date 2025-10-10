import BuilderComponent from "@/components/Builder/Builder";
import Container from "@/components/Container";
import HeroImage from "../HeroImage";

export default function CortinaPage({
  cortina_hero,
  builder_items,
  globals,
  medijskeVsebineItems,
  medijskeVsebineKategorije,
  videosItems,
}: any) {
  // Add media and videos data to globals
  const enhancedGlobals = {
    ...globals,
    medijskeVsebineItems: medijskeVsebineItems?.data || [],
    medijskeVsebineKategorije: medijskeVsebineKategorije?.data || [],
    videosItems,
  };
  
  return (
    <div className="">
      {cortina_hero && (
        <HeroImage
          type="cortina"
          title={cortina_hero.cortina_title}
          copy={cortina_hero.cortina_content}
          buttons={cortina_hero.cortina_ctas?.map((cta: any) => ({
            title: cta.cta.title,
            url: cta.cta.link,
          })) || []}
          image={cortina_hero.cortinabg_image?.[0]?.permalink || ""}
        />
      )}
      <Container className=" mx-auto py-16 md:py-20">
        {builder_items?.map((content: any, i: number) => (
          <BuilderComponent
            key={i}
            type={content.type}
            data={content}
            globals={enhancedGlobals}
          />
        ))}
      </Container>
    </div>
  );
}


