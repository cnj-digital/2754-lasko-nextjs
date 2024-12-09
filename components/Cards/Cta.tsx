import Link from "next/link";
import Chevron from "../Icons/Chevron";

type CardCtaProps = {
  title: string;
  copy: string;
  cta: string;
  url: string;
  image: string;
};

export default function CardCta({
  title,
  copy,
  cta,
  url,
  image,
}: CardCtaProps) {
  return (
    <Link
      href={url}
      className="relative bg-white rounded-3xl overflow-hidden lg:overflow-visible shadow-card lg:w-2/5 lg:first:w-3/5 flex-shrink hover:w-3/5 transition-all group h-[460px] lg:h-[400px]"
    >
      <div className="p-8 lg:h-full flex flex-col max-w-sm items-start">
        <h3 className=" font-neutraface text-[40px] text-green-800 leading-tight">
          {title}
        </h3>
        <p className=" text-gray-600 text-xl font-semibold leading-[1.4]">
          {copy}
        </p>

        <button className="hidden relative mt-auto lg:flex rounded-xl pl-6 pr-2 py-2 items-center overflow-hidden border-2 group-hover:border-transparent transition text-gray-600 group-hover:text-white  border-gray-600 text-left">
          <div
            className="h-full w-full absolute inset-0 text-2xl opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background:
                " linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 99.91%), #449935",
            }}
          />
          <span className=" leading-snug transition z-10 relative font-semibold ">
            {cta}
          </span>
          <Chevron className="size-6 ml-3 transition  relative z-10" />
        </button>
      </div>

      <img
        src={image}
        alt={title}
        className="relative lg:absolute lg:right-0 lg:bottom-0 lg:scale-80 transition  origin-bottom group-hover:scale-100 lg:h-full"
      />
    </Link>
  );
}
