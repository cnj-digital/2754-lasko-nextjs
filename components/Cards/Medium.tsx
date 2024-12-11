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
      style={{
        background:
          " linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 99.91%), #449935",
      }}
    >
      <img src={image} alt="card" className="object-contain h-48" />
    </Link>
  );
}
