import Link from "next/link";

type ButtonProps = {
  title: string;
  url: string;
  onClick?: () => void;
};

export default function ButtonSolid({ title, url, onClick }: ButtonProps) {
  const Tag = url ? Link : "button";
  return (
    <Tag
      className="px-6 py-2 rounded-full font-medium text-white
    bg-gradient-to-r from-green-600 to-green-700 
    hover:from-green-700 hover:to-green-800 
    transition-all duration-300
    flex items-center gap-2"
      href={url ?? ""}
      onClick={onClick}
    >
      {title}
    </Tag>
  );
}
