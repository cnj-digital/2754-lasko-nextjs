import Link from "next/link";
import Chevron from "../Icons/Chevron";
import cx from "classnames";

type CardCtaProps = {
  title: string;
  copy: string;
  cta: string;
  url: string;
  image: string;
  className?: string;
  isHovered: boolean;
  setIsHovered: () => void;
};

export default function CardCta({
  title,
  copy,
  cta,
  url,
  image,
  className,
  isHovered,
  setIsHovered,
}: CardCtaProps) {
  return (
    <Link
      href={url}
      className={cx(
        "relative block bg-white rounded-3xl overflow-hidden lg:overflow-visible shadow-card w-full flex-shrink transition-all group h-[460px] lg:h-[400px]",
        className,
        isHovered ? "lg:w-3/5" : "lg:w-2/5"
      )}
      onMouseEnter={() => setIsHovered()}
    >
      <div className="p-8 lg:h-full flex flex-col max-w-xs items-start ">
        <h3 className=" font-neutraface text-[40px] text-green-800 leading-tight text-balance">
          {title}
        </h3>
        <p className=" text-gray-600 text-xl font-semibold leading-[1.4]">
          {copy}
        </p>

        <button
          className={cx(
            "hidden relative mt-auto lg:flex rounded-xl pl-6 pr-2 py-2 items-center overflow-hidden border-2  transition text-left",
            isHovered
              ? "border-transparent text-white "
              : "text-gray-600 border-gray-600 "
          )}
        >
          <div
            className={cx(
              "h-full w-full absolute inset-0 text-2xl  transition-opacity",
              isHovered ? "opacity-100" : "opacity-0"
            )}
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

      <div className="overflow-x-hidden w-full h-full absolute inset-0">
        <img
          src={image}
          alt={title}
          className={cx(
            "relative lg:absolute lg:left-1/2 lg:bottom-0 lg:transition origin-bottom-right lg:h-full",
            isHovered ? "lg:scale-110 " : "lg:scale-75 "
          )}
        />
      </div>
    </Link>
  );
}
