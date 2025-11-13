"use client";

import CardNews from "@/components/Cards/News";

type RelatedPage = {
  permalink: string;
  title: string;
  slug?: string;
  featured_image?: {
    permalink: string;
  };
};

type RelatedPagesProps = {
  type?: string;
  title?: string | null;
  related_pages_title?: string | null;
  related_pages_two_title?: string | null;
  pages?: RelatedPage[];
};

export default function RelatedPages({
  related_pages_title,
  related_pages_two_title,
  title,
  pages,
}: RelatedPagesProps) {
  const items = pages ?? [];

  if (items.length === 0) return null;

  const heading =
    related_pages_title ?? related_pages_two_title ?? title ?? "Related pages";

  return (
    <section className="max-w-8xl w-full mx-auto my-20">
      {heading && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {heading}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((page) => (
          <CardNews
            key={page.slug}
            title={page.title}
            image={page.featured_image?.permalink || "/placeholders/news.png"}
            url={page.permalink}
            category=""
          />
        ))}
      </div>
    </section>
  );
}


