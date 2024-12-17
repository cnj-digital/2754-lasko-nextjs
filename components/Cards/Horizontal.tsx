import Link from "next/link";
import ArrowDiagonalIcon from "../Icons/ArrowDiagonal";

type CardHorizontalProps = {
  url: string;
  image: string;
  title: string;
};

export default function CardHorizontal({
  url,
  image,
  title,
}: CardHorizontalProps) {
  return (
    <Link
      href={url}
      className=" bg-white px-4 py-3 rounded-2xl flex gap-5 group items-center shadow-card"
    >
      <img src={image} alt="card" className="" />
      <span className="text-lg text-black font-semibold">{title}</span>
      <div className="bg-black bg-opacity-5 rounded-2xl p-2.5 opacity-0 group-hover:opacity-100 ml-auto transition">
        <ArrowDiagonalIcon className=" size-8 text-[#7F7F7F]" />
      </div>
    </Link>
  );
}
