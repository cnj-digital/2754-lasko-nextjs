import Link from "next/link";
import Chevron from "../Icons/Chevron";

type CardGreenHorizontalProps = {
  url: string;
  image: string;
  title: string;
};

export default function CardGreenHorizontal({
  url,
  image,
  title,
}: CardGreenHorizontalProps) {
  return (
    <Link
      href={url}
      className="relative flex group items-center py-3 px-3 rounded-3xl justify-end overflow-hidden h-24"
      style={{
        background:
          " linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 99.91%), #449935",
        backgroundSize: "auto 100%",
      }}
    >
      <img
        src={image}
        alt="card"
        className="object-contain w-1/2 lg:w-2/6 absolute left-0 lg:left-20 mix-blend-luminosity group-hover:scale-125 transition-transform"
      />
      <span className="text-2xl text-white font-black font-neutraface lg:mr-8">
        {title}
      </span>
      <Chevron className="text-white group-hover:translate-x-2 transition-transform size-10 " />
    </Link>
  );
}
