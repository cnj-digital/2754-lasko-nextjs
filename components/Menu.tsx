"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import cx from "classnames";
import { isExternalLink } from "@/helpers/general";
import Container from "./Container";
import MenuIcon from "./Icons/Menu";
import MobileMenu from "./Menu/MobileMenu";
import ArrowDiagonalIcon from "./Icons/ArrowDiagonal";
import { external_links } from "@/data/general";
import { usePathname } from "next/navigation";

// Load language menu only on the client to avoid hydration ID mismatches from Headless UI
const LangMenu = dynamic(() => import("./Menu/LangMenu"), {
  ssr: false,
});

type MenuProps = {
  nav: {
    title: string;
    url: string;
  }[];
};

const Menu = ({ nav }: MenuProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1];
  const lang =
    currentLang === "en" || currentLang === "si" ? currentLang : "si";

  const socialsTitle = "Sledite nam";
  const socials = [
    {
      title: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50  ${
        isScrolled ? "backdrop-blur-lg  " : "bg-transparent"
      }`}
    >
      <div className="absolute z-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent" />
      <Container className="w-full">
        <nav className="grid grid-cols-3 lg:flex justify-center lg:justify-start items-center py-2.5 w-full ">
          <Link
            href={`/${lang}`}
            className=" mx-auto lg:mx-0 w-24 xl:w-[140px] order-2 lg:order-1 self-center relative"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className={cx(
                "transition-all duration-300 w-full object-contain object-center",
                isScrolled ? " h-[60px] lg:h-[80px] " : "h-[120px]"
              )}
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-4  xl:space-x-6 relative  ml-8 xl:ml-10 order-2">
            {nav.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                target={isExternalLink(item.url) ? "_blank" : "_self"}
                className={cx(
                  "text-white  text-[21px] font-semibold px-4 py-2 flex items-center space-x-2.5 hover:bg-black hover:bg-opacity-30 rounded-xl transition-all duration-300",
                  isExternalLink(item.url) &&
                    "bg-black bg-opacity-30 rounded-xl"
                )}
              >
                <span>{item.title}</span>
                {isExternalLink(item.url) && (
                  <ArrowDiagonalIcon className="text-white group-hover:translate-x-2 transition-transform size-6 " />
                )}
              </Link>
            ))}
          </div>

          <LangMenu className="order-1 lg:order-3 mr-auto lg:mr-0 lg:ml-auto" />

          <button
            className="lg:hidden text-white order-3 ml-auto relative "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="size-8" />
          </button>
        </nav>

        <MobileMenu
          isOpen={isMenuOpen}
          lang={lang}
          onClose={() => setIsMenuOpen(false)}
          items={nav}
          externalLinks={external_links}
          socialsTitle={socialsTitle}
          socials={socials}
        />
      </Container>
    </header>
  );
};

export default Menu;
