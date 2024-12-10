"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import cx from "classnames";
import { isExternalLink } from "@/helpers/general";
import ArrowIcon from "./Icons/Arrow";
import LangMenu from "./Menu/LangMenu";
import Container from "./Container";
import MenuIcon from "./Icons/Menu";
import MobileMenu from "./Menu/MobileMenu";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    {
      title: "Naše pivo",
      url: "/pivo",
    },
    {
      title: "Zgodba",
      url: "/zgodba",
    },
    {
      title: "Podpiramo",
      url: "/podpiramo",
    },
    {
      title: "Spletna trgovina",
      url: "https://www.lasko.eu",
    },
  ];

  const externalLinks = [
    {
      image: "/placeholders/pivocvetje.png",
      title: "Pivo in cvetje",
      url: "https://www.pivoincvetje.si/",
    },
    {
      image: "/placeholders/gremo.png",
      title: "Gremo v hribe",
      url: "https://www.gremo.org/",
    },
    {
      image: "/placeholders/pohor.png",
      title: "Pohorski smuk",
      url: "https://www.pohorje.org/",
    },
  ];

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
      title: "Twitter",
      url: "https://twitter.com/",
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
            href="/"
            className=" mx-auto lg:mx-0 w-24 xl:w-[140px] order-2 lg:order-1 self-center"
          >
            <img
              src="logo.png"
              alt="Logo"
              className={cx(
                "transition-all duration-300 w-full object-contain object-center",
                isScrolled ? " h-[60px] lg:h-[80px] " : "h-[120px]"
              )}
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-4  xl:space-x-6 relative  ml-8 xl:ml-10 order-2">
            {items.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className={cx(
                  " text-[21px] font-semibold px-4 py-2 flex items-center space-x-2.5 hover:bg-black hover:bg-opacity-30 rounded-xl transition-all duration-300",
                  isExternalLink(item.url) &&
                    "bg-black bg-opacity-30 rounded-xl"
                )}
              >
                <span>{item.title}</span>
                {isExternalLink(item.url) && (
                  <ArrowIcon className="text-white group-hover:translate-x-2 transition-transform size-5 " />
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
          onClose={() => setIsMenuOpen(false)}
          items={items}
          externalLinks={externalLinks}
          socialsTitle={socialsTitle}
          socials={socials}
        />
      </Container>
    </header>
  );
};

export default Menu;
