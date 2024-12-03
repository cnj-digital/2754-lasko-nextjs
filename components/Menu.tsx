"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      url: "#",
    },
    {
      title: "Spletna trgovina",
      url: "#",
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
      className={`fixed w-full transition-all duration-300 z-10  ${
        isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
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
                className="font-raleway text-xl font-semibold px-4 py-2"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden md:block ml-auto">
            <button className="text-white hover:text-gray-300">SI</button>
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
