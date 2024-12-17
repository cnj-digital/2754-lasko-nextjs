import { Dialog } from "@headlessui/react";
import Link from "next/link";
import CloseIcon from "../Icons/Close";
import LangMenu from "./LangMenu";
import Chevron from "../Icons/Chevron";
import { isExternalLink } from "@/helpers/general";
import Socials from "../Socials";
import { motion, AnimatePresence } from "motion/react";
import ArrowDiagonalIcon from "../Icons/ArrowDiagonal";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: { title: string; url: string }[];
  externalLinks?: { image: string; title: string; url: string }[];
  socialsTitle: string;
  socials: { title: string; url: string }[];
};

export default function MobileMenu({
  isOpen,
  onClose,
  items,
  externalLinks,
  socialsTitle,
  socials,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog static open={isOpen} onClose={onClose}>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 h-full w-full z-[60] bg-cover bg-right overflow-auto"
            style={{ backgroundImage: "url('/footer.jpg')" }}
          >
            <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/16" />
            <div className="flex relative items-center px-8 pt-4 gap-4">
              <Link href="/" className="mr-auto" onClick={onClose}>
                <img src="logo.png" alt="Logo" className=" h-[60px] " />
              </Link>
              <LangMenu />
              <button className="" onClick={() => onClose()}>
                <CloseIcon className="size-8" />
              </button>
            </div>
            <div className="relative px-8 mt-8 space-y-4">
              {externalLinks &&
                externalLinks.map((link, i) => (
                  <Link
                    href={link.url}
                    key={i}
                    className="pr-4 pl-3   py-3 rounded-2xl shadow-small-card bg-green-500 flex gap-4 font-lg font-semibold items-center w-full"
                    onClick={onClose}
                  >
                    <div className="bg-white rounded-lg size-14 mr-1">
                      <img
                        src={link.image}
                        alt="icon"
                        className="w-full h-full object-contain px-2"
                      />
                    </div>
                    <span className="mr-auto">{link.title}</span>
                    <ArrowDiagonalIcon className="size-8" />
                  </Link>
                ))}
            </div>
            <div className="px-8 pt-6 relative space-y-5">
              {items.map((item, i) => (
                <Link
                  href={item.url}
                  key={i}
                  className="px-4 py-3 rounded-2xl bg-white shadow-small-card  text-green-800 flex justify-between font-xl font-semibold items-center w-full"
                  style={{ backgroundImage: 'url("/bg.jpg")' }}
                  target={isExternalLink(item.url) ? "_blank" : "_self"}
                  onClick={onClose}
                >
                  <span>{item.title} </span>
                  {isExternalLink(item.url) ? (
                    <ArrowDiagonalIcon className="size-8" />
                  ) : (
                    <Chevron className="size-8" />
                  )}
                </Link>
              ))}
            </div>

            <Socials
              socialsTitle={socialsTitle}
              socials={socials}
              className=" mt-6 mb-24"
            />
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
