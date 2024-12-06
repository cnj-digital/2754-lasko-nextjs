"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import cx from "classnames";
import { isExternalLink } from "@/helpers/general";
import Chevron from "./Icons/Chevron";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langMenu, setLangMenu] = useState(false);

  const items = [
    {
      title: "Naše pivo",
      url: "#",
    },
    {
      title: "Zgodba",
      url: "#",
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-10   ${
        isScrolled
          ? "bg-black/30 backdrop-blur-lg  bg-gradient-to-b from-black/80 to-black/0 "
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center py-2.5 ">
          {/* Logo */}
          <div className=" w-[140px]">
            <img
              src="logo.png"
              alt="Logo"
              className={`transition-all duration-300  ${
                isScrolled ? "h-[80px]" : "h-[120px]"
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6  ml-20">
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
                  <Chevron className="text-white group-hover:translate-x-2 transition-transform size-8 " />
                )}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div
            className="hidden md:block ml-auto  bg-black bg-opacity-30 hover:bg-opacity-50 rounded-xl relative "
            onClick={() => setLangMenu(!langMenu)}
          >
            <button className="text-white hover:text-gray-300 px-6 py-2 flex items-center justify-between gap-2 font-medium ">
              <span className="flex-shrink-0 text-xl min-w-8">SI</span>
              <Chevron className="text-white group-hover:translate-x-2 transition-transform size-6 rotate-90" />
            </button>
            <div className="">
              {langMenu && (
                <div className="absolute mt-2 overflow-hidden rounded-xl text-xl right-0 divide-y-1 w-[142px]">
                  <button className="block text-white px-4 py-2 border-b bg-black bg-opacity-30 hover:bg-opacity-50 border-b-white border-opacity-50 w-full text-left font-medium">
                    SI
                  </button>
                  <button className="block text-white px-4 py-2 bg-black bg-opacity-30 hover:bg-opacity-50 border-b-white border-opacity-50 w-full text-left font-medium">
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* <Menu size={24} /> */}
            menu
          </button>
        </nav>

        {/* Mobile Menu Modal */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {items.map((item, i) => (
                <Link key={i} href={item.url}>
                  {item.title}
                </Link>
              ))}
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;
