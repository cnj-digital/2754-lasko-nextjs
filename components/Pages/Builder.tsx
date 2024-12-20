import BuilderComponent from "@/components/Article/Builder";
import ArticleHero from "@/components/Article/Hero";
import Container from "@/components/Container";

export default function BuilderPage({
  title,
  featured_image,
  builder_items,
}: any) {

    console.log(builder_items);
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
