"use client";

import { useState } from "react";
import Image from "next/image";

type WallOfFameItem = {
  id: string;
  title: string;
  type?: string;
  image: {
    permalink: string;
  };
};

type WallOfFameBox = {
  id: string;
  title: string;
  item?: WallOfFameItem[];
};

type WallOfFameProps = {
  title?: string;
  boxes?: WallOfFameBox[];
};

export default function WallOfFame({ title, boxes = [] }: WallOfFameProps) {
  // Use Set to allow multiple accordions to be open, start with first one open
  const [openBoxes, setOpenBoxes] = useState<Set<number>>(new Set([0]));

  const toggleBox = (index: number) => {
    setOpenBoxes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  if (!boxes || boxes.length === 0) return null;

  return (
    <section className="max-w-8xl w-full mx-auto my-20">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {title}
        </h2>
      )}

      <div className="space-y-3 md:space-y-5">
        {boxes.map((box, index) => (
          <div key={box.id} className="overflow-hidden">
            {/* Accordion Header */}
            <button
              onClick={() => toggleBox(index)}
              className="w-full px-6 py-3 flex items-center justify-between md:justify-start text-left transition-colors"
            >
              <h3 className="text-black font-black text-[28px] md:text-[32px] leading-tight font-neutraface">
                {box.title}
              </h3>
              <svg
                className={`w-8 h-8 text-green-800 transition-transform ml-6 ${
                  openBoxes.has(index) ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M8.45189 13.1933C8.73375 12.9114 9.09247 12.7705 9.52806 12.7705C9.96365 12.7705 10.3224 12.9114 10.6042 13.1933L16.6 19.1891L22.5958 13.1933C22.8776 12.9114 23.2364 12.7705 23.672 12.7705C24.1075 12.7705 24.4663 12.9114 24.7481 13.1933C25.03 13.4751 25.1709 13.8339 25.1709 14.2695C25.1709 14.705 25.03 15.0638 24.7481 15.3456L17.6762 22.4176C17.5224 22.5713 17.3559 22.6805 17.1765 22.745C16.9972 22.8086 16.805 22.8403 16.6 22.8403C16.395 22.8403 16.2028 22.8086 16.0235 22.745C15.8441 22.6805 15.6776 22.5713 15.5238 22.4176L8.45189 15.3456C8.17004 15.0638 8.02911 14.705 8.02911 14.2695C8.02911 13.8339 8.17004 13.4751 8.45189 13.1933Z"
                  fill="#044A16"
                />
              </svg>
            </button>

            {/* Accordion Content */}
            <div
              className={`pb-4 pt-4 transition-all duration-300 ease-in-out ${
                openBoxes.has(index)
                  ? "max-h-[5000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                {box.item && box.item.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {box.item.map((entry) => (
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
                        <h4 className="text-left text-xl md:text-2xl leading-[120%] font-bold text-black mt-4 md:mt-6 mb-6 md:mb-8 px-4 md:px-8">
                          {entry.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
