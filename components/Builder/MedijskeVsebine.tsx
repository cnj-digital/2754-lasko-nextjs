"use client";
import { useState } from "react";
import CardNews from "@/components/Cards/News";

type MediaItem = {
  id: string;
  title: string;
  slug: string;
  permalink: string | null;
  content: string | null;
  featured_image?: Array<{
    permalink: string;
  }>;
  kategorija: {
    id: string;
    title: string;
    slug: string;
    permalink: string | null;
  } | null;
};

type Category = {
  id: string;
  title: string;
  slug: string;
  permalink: string;
};

type MedijskeVsebineProps = {
  title?: string | null;
  medijskeVsebineItems?: MediaItem[];
  medijskeVsebineKategorije?: Category[];
};

export default function MedijskeVsebine({ 
  title,
  medijskeVsebineItems = [],
  medijskeVsebineKategorije = [],
}: MedijskeVsebineProps) {
  // Sort categories by name and set first as active by default
  const sortedCategories = [...medijskeVsebineKategorije].sort((a, b) => 
    a.title.localeCompare(b.title, 'sl')
  );
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    sortedCategories.length > 0 ? sortedCategories[0].slug : null
  );
  
  // Debug: Check what data is being received
  console.log('MedijskeVsebine - title:', title);
  console.log('MedijskeVsebine - items:', medijskeVsebineItems);
  console.log('MedijskeVsebine - categories:', medijskeVsebineKategorije);
  console.log('MedijskeVsebine - first item structure:', medijskeVsebineItems?.[0]);

  const handleCategoryClick = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
  };
  
  // Filter items based on selected category
  const filteredItems = selectedCategory
    ? medijskeVsebineItems.filter(item => item.kategorija?.slug === selectedCategory)
    : medijskeVsebineItems;

  return (
    <section className="max-w-8xl w-full mx-auto">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {title}
        </h2>
      )}

      {/* Categories Filter */}
      {medijskeVsebineKategorije.length > 0 && (
        <div className="-mx-6 px-6 lg:mx-0 lg:px-0 flex md:flex-wrap gap-4 mb-10 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {sortedCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className={`px-6 py-4 rounded-xl font-semibold transition-colors text-[20px] shadow-[0_4px_12px_0_rgba(0,0,0,0.25)] flex-shrink-0 ${
                selectedCategory === category.slug
                  ? "text-white"
                  : "bg-white text-black category-button-hover"
              }`}
              style={selectedCategory === category.slug ? {
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 99.91%), #449935'
              } : undefined}
            >
              {category.title}
            </button>
          ))}
        </div>
      )}

      {/* Media Items Grid */}
      <div className="w-full">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
            {filteredItems.map((item) => (
              <CardNews
                key={item.id}
                title={item.title}
                image={item.featured_image?.[0]?.permalink || "/placeholders/news.png"}
                url={`/si/medijske-vsebine/${item.slug}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-12">
            Ni vsebin za prikaz.
          </p>
        )}
      </div>
    </section>
  );
}
