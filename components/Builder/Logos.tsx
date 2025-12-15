"use client";
import Link from "next/link";
import Image from "next/image";

type LogoItem = {
  id: string;
  image: {
    permalink: string;
  };
  url: string;
};

type LogosProps = {
  title?: string;
  items?: LogoItem[];
};

export default function Logos({ title, items = [] }: LogosProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="max-w-8xl w-full mx-auto my-20">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-5">
        {items.map((item) => {
          const content = (
            <Image
              src={item.image?.permalink}
              alt=""
              className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
              width={640}
              height={640}
            />
          );

          if (item.url) {
            return (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 bg-white rounded-2xl shadow-card transition-all duration-300 h-[160px] md:h-[200px]"
              >
                {content}
              </Link>
            );
          } else {
            return (
              <div
                id="logos"
                key={item.id}
                className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-card h-[160px] md:h-[200px]"
              >
                {content}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
