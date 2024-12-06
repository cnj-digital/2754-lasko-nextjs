import Chevron from "../Icons/Chevron";
import cx from "classnames";

type CardNewsProps = {
  title: string;
  tagline: string;
  image: string;
  className?: string;
};

export default function CardNews({
  title,
  tagline,
  image,
  className,
}: CardNewsProps) {
  return (
    <div
      className={cx(
        "group rounded-3xl shadow-card overflow-hidden w-full",
        className
      )}
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="group grayscale group-hover:grayscale-0 transition-all w-full h-[260px] overflow-hidden">
        <img
          src={image}
          className=" group-hover:scale-105 transition-all w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center pl-8 pr-4 pb-8 pt-6 justify-between">
        <h3 className="mt-1 text-2xl text-black font-bold line-clamp-2">
          {title}
        </h3>
        <Chevron className=" text-black size-10 " />
      </div>
    </div>
  );
}
