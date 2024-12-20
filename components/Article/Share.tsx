"use client";
import { usePathname } from "next/navigation";
import FacebookIcon from "../Icons/Facebook";
import InstagramIcon from "../Icons/Instagram";
import LinkIcon from "../Icons/Link";
import { strings } from "@/data/general";
import Link from "next/link";

export default function Share() {
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1];
  const lang =
    currentLang === "en" || currentLang === "si" ? currentLang : "si";

  return (
    <div
      className="px-6 py-8 flex flex-col items-center justify-center rounded-3xl w-full bg-cover my-20"
      style={{ backgroundImage: 'url("/bg-green.jpg")' }}
    >
      <span className="text-2xl text-white font-neutraface">
        {strings[lang].share.title}
      </span>
      <div className="flex flex-wrap gap-4 mt-6 items-center">
        <Link
          href={`https://www.instagram.com/share?url=${encodeURIComponent(
            `https://www.lasko.eu/${pathname}`
          )}`}
          target="_blank"
          className=""
        >
          <InstagramIcon className="text-white size-14" />
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            `https://www.lasko.eu/${pathname}`
          )}`}
          target="_blank"
        >
          <FacebookIcon className="text-white size-14" />
        </Link>
        <button
          className="bg-white text-green-800 rounded-xl font-semibold px-6 py-1.5 border border-white text-xl flex items-center "
          onClick={() =>
            navigator.clipboard.writeText(`https://www.lasko.eu/${pathname}`)
          }
        >
          <LinkIcon className="size-8 mr-2" />
          <span>{strings[lang].share.copy}</span>
        </button>
      </div>
    </div>
  );
}
