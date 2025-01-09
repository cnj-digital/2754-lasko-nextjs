"use client";
import { isExternalLink } from "@/helpers/general";
import Link from "next/link";
import cx from "classnames";

type ButtonProps = {
  title: string;
  url?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "small" | "large";
  type?: "button" | "submit";
};

export default function ButtonSolid({
  title,
  url,
  icon,
  size = "large",
  onClick,
  className,
  type,
}: ButtonProps) {
  const Tag = url ? Link : "button";
  return (
    <Tag
      className={cx(
        "px-6 py-4 rounded-xl font-semibold text-white group transition-all duration-300 flex items-center gap-2 shadow-button",
        className,
        size === "small" ? "text-lg" : "text-2xl"
      )}
      href={url ?? ""}
      target={url && isExternalLink(url) ? "_blank" : ""}
      onClick={() => (onClick ? onClick() : null)}
      type={type}
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
