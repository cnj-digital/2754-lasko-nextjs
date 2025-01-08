import BuilderComponent from "@/components/Builder/Builder";
import ArticleHero from "@/components/Builder/Hero";
import Container from "@/components/Container";

export default function BuilderPage({
  title,
  featured_image,
  builder_items,
}: any) {
  return (
    <div className="">
      <ArticleHero title={title} backgroundUrl={featured_image?.permalink} />
      <Container className=" mx-auto">
        {builder_items.map((content: any, i: number) => (
          <BuilderComponent key={i} type={content.type} data={content} />
        ))}
      </Container>
    </div>
  );
}
