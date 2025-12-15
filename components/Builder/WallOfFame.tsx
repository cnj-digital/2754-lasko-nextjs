"use client";

import Image from "next/image";
type WallOfFameItem = {
  id: string;
  image: {
    permalink: string;
  };
  title: string;
};

type WallOfFameProps = {
  title?: string;
  item?: WallOfFameItem[];
};

export default function WallOfFame({ title, item = [] }: WallOfFameProps) {
  if (!item || item.length === 0) return null;

  return (
    <section className="max-w-8xl w-full mx-auto my-20">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {item.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-col bg-white rounded-3xl shadow-card"
            style={{ backgroundImage: "url('/bg.jpg')" }}
          >
            <div className="w-full aspect-square overflow-hidden rounded-t-3xl">
              <Image
                src={entry.image?.permalink}
                alt={entry.title}
                className="w-full h-full object-cover"
                width={640}
                height={480}
              />
            </div>
            <h3 className="text-left text-2xl leading-[120%] font-bold text-black mt-6 mb-8 px-8">
              {entry.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
