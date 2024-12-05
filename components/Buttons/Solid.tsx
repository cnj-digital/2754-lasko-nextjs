import { isExternalLink } from "@/helpers/general";
import Link from "next/link";

type ButtonProps = {
  title: string;
  url: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function ButtonSolid({
  title,
  url,
  icon,
  onClick,
}: ButtonProps) {
  const Tag = url ? Link : "button";
  return (
    <Tag
      className="px-6 py-4 rounded-xl font-semibold text-white group
    transition-all duration-300 
    flex items-center gap-2 shadow-button"
      href={url ?? ""}
      target={isExternalLink(url) ? "_blank" : ""}
      onClick={onClick}
      style={{
        background:
          " linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 99.91%), #449935",
      }}
    >
      {title}
      {icon}
    </Tag>
  );
}
