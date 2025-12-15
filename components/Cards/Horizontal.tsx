import Link from "next/link";
import ArrowDiagonalIcon from "../Icons/ArrowDiagonal";
import Image from "next/image";

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
      <Image src={image} alt="card" className="" width={56} height={56} />
      <span className="text-lg text-black leading-[1.4] font-semibold">
        {title}
      </span>
      <div className="bg-black bg-opacity-5 rounded-2xl p-2.5 md:opacity-0 md:group-hover:opacity-100 ml-auto transition">
        <ArrowDiagonalIcon className=" size-8 text-[#7F7F7F]" />
      </div>
    </Link>
  );
}
