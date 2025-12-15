import { generateAnchorLink } from "@/helpers/general";
import Container from "./Container";
import Image from "next/image";

type ContentGridProps = {
  title: string;
  sectionTitle: string;
  items: {
    image: string;
    title: string;
    copy: string;
  }[];
};

export default function ContentGrid({
  title,
  sectionTitle,
  items,
}: ContentGridProps) {
  return (
    <Container className="py-16 lg:py-20">
      <h2
        id={generateAnchorLink(title)}
        className="text-green-800 font-neutraface text-[40px] lg:text-[52px] leading-tight"
      >
        {title}
      </h2>

      <div className="mt-10 lg:mt-16">
        <h3
          id={generateAnchorLink(sectionTitle)}
          className="text-[32px] lg:text-[40px] leading-tight font-neutraface font-black text-green-800"
        >
          {sectionTitle}
        </h3>
        <div className=" lg:grid grid-cols-2 mt-10 gap-6 lg:gap-10 -mx-6 lg:mx-0 px-6 lg:px-0 overflow-auto no-scrollbar flex snap-mandatory snap-x scroll-p-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start lg:flex-row gap-6 lg:gap-10 w-4/5 lg:w-full flex-shrink-0 snap-start"
            >
              <Image src={item.image} alt={item.title} width={640} height={427} className="lg:w-1/2 aspect-square rounded-2xl object-cover" style={{ height: 'auto' }} />
              <div className="text-black">
                <h4
                  id={generateAnchorLink(item.title)}
                  className="text-2xl lg:text-[32px] leading-tight font-bold"
                >
                  {item.title}
                </h4>
                <p className="text-base lg:text-lg font-medium mt-4">
                  {item.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
