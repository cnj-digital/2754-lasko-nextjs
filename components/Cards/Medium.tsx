import Link from "next/link";

type MediumCardProps = {
  image: string;
  url: string;
};

export default function CardMedium({ image, url }: MediumCardProps) {
  return (
    <Link
      className=" shadow-card bg-white hover:bg-green-500 flex items-center justify-center rounded-3xl w-full aspect-[1.5] transition px-10"
      href={url}
    >
      <img src={image} alt="card" className="object-contain h-48" />
    </Link>
  );
}
