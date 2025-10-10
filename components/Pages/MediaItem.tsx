import ArticleHero from "@/components/Builder/Hero";
import Container from "@/components/Container";

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("sl-SI", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

export default async function MediaItem({
  title,
  date,
  featured_image,
  content,
  category,
  kategorija,
  globals,
}: any) {
  const itemCategory = category || kategorija;
  
  console.log('MediaItem - featured_image:', featured_image);
  console.log('MediaItem - is array?', Array.isArray(featured_image));
  
  const backgroundImage = Array.isArray(featured_image) && featured_image.length > 0
    ? featured_image[0]?.permalink
    : featured_image?.permalink;
  
  console.log('MediaItem - backgroundImage:', backgroundImage); 
  
  return (
    <div className="">
      <ArticleHero
        title={title}
        backgroundUrl={backgroundImage}
        date={date ? formatDate(date) : undefined}
      />
      <Container className=" mx-auto mt-10">
        {content && (
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        )}
        {itemCategory && (
          <div className="mt-8">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
              Kategorija: {itemCategory.title}
            </span>
          </div>
        )}
      </Container>
    </div>
  );
}
