import Container from "./Container";

type ContentGridBackgroundProps = {
  title: string;
  sectionTitle: string;
  sectionCopy: string;
  items: {
    image: string;
    title: string;
    copy: string;
  }[];
};

export default function ContentGridBackground({
  title,
  sectionTitle,
  sectionCopy,
  items,
}: ContentGridBackgroundProps) {
  return (
    <div
      className="max-w-8xl py-20 w-full mx-auto flex flex-col items-center bg-green-700 rounded-4xl bg-blend-color-burn"
      style={{ backgroundImage: "url('/bg-green.png')" }}
    >
      <Container className="py-20">
        <h2 className="text-white font-neutraface text-[52px] leading-tight">
          {title}
        </h2>

        <div className="mt-16">
          <h3 className=" text-[32px] leading-[1.4] font-black text-white">
            {sectionTitle}
          </h3>
          <p className="mt-10 font-medium text-xl">{sectionCopy}</p>
          <div className=" lg:grid grid-cols-2 mt-16 gap-6 lg:gap-10 -mx-8 lg:mx-0 px-8 lg:px-0 overflow-auto flex snap-mandatory snap-x scroll-p-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-start lg:flex-row gap-6 lg:gap-10 w-4/5 lg:w-full flex-shrink-0 snap-start"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" lg:w-1/2 aspect-square rounded-2xl object-contain"
                />
                <div className="text-white">
                  <h4 className=" text-[32px] leading-tight font-bold">
                    {item.title}
                  </h4>
                  <p className="text-xl font-medium mt-4">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
