import Link from "next/link";
import Image from "next/image";
import ArrowDiagonalIcon from "../Icons/ArrowDiagonal";

type MediumCardProps = {
  image: string;
  url: string;
};

export default function CardMedium({ image, url }: MediumCardProps) {
  return (
    <Link
      className="relative shadow-card  hover:bg-green-500 bg-white hover:bg-gradient-to-b group from-transparent from-50% to-black/10 flex items-center justify-center rounded-3xl  w-5/6 lg:w-full aspect-[1.2] lg:aspect-[1.5] transition px-10 flex-shrink-0"
      href={url}
    >
      <Image 
        src={image} 
        alt="card" 
        width={640} 
        height={427} 
        className="object-contain h-48"
        style={{ width: 'auto' }}
      />
      <div className="absolute rounded-2xl top-4 right-4 lg:bg-white bg-black lg:bg-opacity-5  bg-opacity-5 backdrop-blur-sm p-2.5 md:group-hover:opacity-100 md:opacity-0">
        <ArrowDiagonalIcon className="text-[#7f7f7f] lg:text-white size-8" />
      </div>
    </Link>
  );
}
