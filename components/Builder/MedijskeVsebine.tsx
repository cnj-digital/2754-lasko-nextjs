"use client";
import { useState } from "react";
import CardNews from "@/components/Cards/News";
import CardLogo from "@/components/Cards/Logo";
import CardMedia from "@/components/Cards/Media";

type MediaItem = {
  id: string;
  title: string;
  slug: string;
  permalink: string | null;
  content: string | null;
  type?: {
    value?: string;
  };
  featured_image?: Array<{
    permalink: string;
  }>;
  file?: {
    permalink: string;
  };
  kategorija: {
    id: string;
    title: string;
    slug: string;
    permalink: string | null;
  } | null;
};

type SelectedMediaItem = {
  id: string;
  title: string;
  slug: string;
  featured_image?: {
    permalink: string;
  };
  file?: {
    permalink: string;
  };
  type?: {
    label?: string;
    value?: string;
  };
  kategorija?: {
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
  select_medijske_vsebine?: SelectedMediaItem[];
};

export default function MedijskeVsebine({ 
  title,
  medijskeVsebineItems = [],
  medijskeVsebineKategorije = [],
  select_medijske_vsebine = [],
}: MedijskeVsebineProps) {
  // Check if we have manually selected items
  const hasSelectedItems = select_medijske_vsebine && select_medijske_vsebine.length > 0;

  // Extract unique categories from selected items
  const selectedItemsCategories: Category[] = hasSelectedItems
    ? Array.from(
        new Map(
          select_medijske_vsebine
            .filter((item) => item.kategorija)
            .map((item) => [item.kategorija!.id, item.kategorija!])
        ).values()
      ).map((cat) => ({
        id: cat.id,
        title: cat.title,
        slug: cat.slug,
        permalink: cat.permalink || "",
      }))
    : [];

  // Sort categories by name
  const sortedCategories = hasSelectedItems
    ? [...selectedItemsCategories].sort((a, b) => a.title.localeCompare(b.title, 'sl'))
    : [...medijskeVsebineKategorije].sort((a, b) => a.title.localeCompare(b.title, 'sl'));
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    sortedCategories.length > 0 ? sortedCategories[0].slug : null
  );

  const handleCategoryClick = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
  };
  
  // Filter items based on selected category
  const filteredItems = selectedCategory
    ? medijskeVsebineItems.filter(item => item.kategorija?.slug === selectedCategory)
    : medijskeVsebineItems;

  // Filter selected items based on selected category
  const filteredSelectedItems = selectedCategory
    ? select_medijske_vsebine.filter(item => item.kategorija?.slug === selectedCategory)
    : select_medijske_vsebine;



  return (
    <section id="medijskeVsebine" className="max-w-8xl w-full mx-auto my-20">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-6">
          {title}
        </h2>
      )}

      {/* Categories Filter - show for both selected and all items */}
      {sortedCategories.length > 0 && (
        <div className="-mx-6 px-6 lg:mx-0 lg:px-0 flex md:flex-wrap gap-4 mb-6 overflow-x-auto py-4 no-scrollbar md:scrollbar-thin md:scrollbar-thumb-gray-400 md:scrollbar-track-gray-200 [&>*]:flex-shrink-0">
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
        {hasSelectedItems ? (
          // Render selected items (filtered by category)
          filteredSelectedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSelectedItems.map((item) => {
              const imageUrl = item.featured_image?.permalink || 
                              item.file?.permalink || 
                              "/placeholders/news.png";
              const itemUrl = `/si/medijske-vsebine/${item.slug}`;
              const fileUrl = item.file?.permalink || "";
              
              // Render different card types based on the type field
              const itemType = item.type?.value;
              
              if (itemType === "logo") {
                return (
                  <CardLogo
                    key={item.id}
                    title={item.title}
                    image={imageUrl}
                    url={fileUrl}
                  />
                );
              } else if (itemType === "media") {
                return (
                  <CardMedia
                    key={item.id}
                    title={item.title}
                    image={imageUrl}
                    url={fileUrl}
                  />
                );
              } else {
                return (
                  <CardNews
                    key={item.id}
                    title={item.title}
                    image={imageUrl}
                    url={itemUrl}
                  />
                );
              }
            })}
          </div>
          ) : (
            <p className="text-center text-gray-600 py-12">
              Ni vsebin za prikaz.
            </p>
          )
        ) : filteredItems.length > 0 ? (
          // Render filtered items from all media
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
            {filteredItems.map((item) => {
              const imageUrl = item.featured_image?.[0]?.permalink || 
                              item.file?.permalink || 
                              "/placeholders/news.png";
              const itemUrl = `/si/medijske-vsebine/${item.slug}`;
              const fileUrl = item.file?.permalink || "";
              
              // Render different card types based on the type field
              const itemType = item.type?.value;
              
              if (itemType === "logo") {
                return (
                  <CardLogo
                    key={item.id}
                    title={item.title}
                    image={imageUrl}
                    url={fileUrl}
                  />
                );
              } else if (itemType === "media") {
                return (
                  <CardMedia
                    key={item.id}
                    title={item.title}
                    image={imageUrl}
                    url={fileUrl}
                  />
                );
              } else {
                return (
                  <CardNews
                    key={item.id}
                    title={item.title}
                    image={imageUrl}
                    url={itemUrl}
                  />
                );
              }
            })}
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
