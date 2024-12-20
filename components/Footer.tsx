"use client";
import Link from "next/link";

import { isExternalLink } from "@/helpers/general";
import Socials from "./Socials";
import Container from "./Container";
import ArrowDiagonalIcon from "./Icons/ArrowDiagonal";
import { usePathname } from "next/navigation";
import { strings } from "@/data/general";

type FooterProps = {
  nav: {
    children: [
      {
        page: {
          title: string;
          url: string;
        };
      }
    ];
  }[];
};

export default function Footer({ nav }: FooterProps) {
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1];
  const lang =
    currentLang === "en" || currentLang === "si" ? currentLang : "si";
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

  return (
    <footer className="relative pt-36 lg:pt-40">
      <img
        src="/logo.png"
        className="absolute h-[205px] top-0 left-0 right-0 mx-auto z-10"
      />
      <div
        className="relative max-w-8xl w-full mx-auto py-20 lg:pb-32 lg:pt-40 bg-bottom rounded-t-3xl lg:h-[560px]"
        style={{
          backgroundImage: 'url("/footer.jpg")',
          backgroundSize: "auto 100% ",
        }}
      >
        <Container className="">
          <div className=" rounded-3xl px-8 pt-6 pb-10 bg-black bg-opacity-55 backdrop-blur-sm ">
            <Socials
              socialsTitle={strings[lang].footer.followUs}
              socials={socials}
              className="flex lg:hidden mb-10"
            />
            <div className="grid lg:grid-cols-4 gap-10">
              {nav.map((column, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 lg:gap-4 justify-center lg:justify-start"
                >
                  {column.children.map(({ page: link }, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      target={isExternalLink(link.url) ? "_blank" : "_self"}
                      rel={
                        isExternalLink(link.url) ? "noopener noreferrer" : ""
                      }
                      className="text-white text-center lg:text-left flex items-center mx-auto lg:mx-0"
                    >
                      {link.title}
                      {isExternalLink(link.url) && (
                        <ArrowDiagonalIcon className="size-5 ml-2" />
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-10 lg:mt-20 grid lg:grid-cols-3 items-end">
              <p className="text-xs text-center text-white lg:text-left text-balance  lg:max-w-48">
                {strings[lang].footer.copyright}
              </p>
              <Socials
                socialsTitle={strings[lang].footer.followUs}
                socials={socials}
                className="hidden lg:flex"
              />
              <CNJLink />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function CNJLink() {
  return (
    <Link
      href="https://www.cnj.si/"
      className="mr-auto lg:mr-0 mt-6 lg:mt-0 ml-auto"
    >
      <svg
        width="107"
        height="25"
        viewBox="0 0 107 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.886 6.8875V16.6875H10.304V8.6235L7.441 15.7285H5.775L2.912 8.7005V16.6875H1.33V6.8875H3.759L6.608 13.8875L9.457 6.8875H11.886ZM20.8087 9.9815V16.6875H19.3457V15.8825C18.8837 16.4775 18.1907 16.8625 17.2387 16.8625C15.3627 16.8625 13.8857 15.3855 13.8857 13.3345C13.8857 11.2835 15.3627 9.8065 17.2387 9.8065C18.1907 9.8065 18.8837 10.1985 19.3457 10.7935V9.9815H20.8087ZM17.4137 11.1855C16.1537 11.1855 15.3907 12.1585 15.3907 13.3345C15.3907 14.5105 16.1537 15.4835 17.4137 15.4835C18.6247 15.4835 19.4367 14.5595 19.4367 13.3345C19.4367 12.1095 18.6247 11.1855 17.4137 11.1855ZM25.975 9.8065C26.927 9.8065 27.62 10.1985 28.082 10.7935V6.6075H29.545V16.6875H28.082V15.8825C27.62 16.4775 26.927 16.8625 25.975 16.8625C24.099 16.8625 22.622 15.3855 22.622 13.3345C22.622 11.2835 24.099 9.8065 25.975 9.8065ZM26.15 11.1855C24.89 11.1855 24.127 12.1585 24.127 13.3345C24.127 14.5105 24.89 15.4835 26.15 15.4835C27.361 15.4835 28.173 14.5595 28.173 13.3345C28.173 12.1095 27.361 11.1855 26.15 11.1855ZM34.6974 9.8065C36.5734 9.8065 37.8614 11.2345 37.8684 13.3275C37.8684 13.5165 37.8544 13.7055 37.8404 13.8735H32.8844C33.0804 15.0775 33.9274 15.5815 34.8794 15.5815C35.5514 15.5815 36.2654 15.3155 36.8184 14.8745L37.5464 15.9175C36.7274 16.6175 35.8034 16.8625 34.7884 16.8625C32.7794 16.8625 31.3584 15.4625 31.3584 13.3345C31.3584 11.2345 32.7234 9.8065 34.6974 9.8065ZM34.6694 11.1085C33.6264 11.1085 33.0454 11.7805 32.8914 12.7605H36.3704C36.2094 11.7175 35.6004 11.1085 34.6694 11.1085ZM47.0118 9.8065C48.8878 9.8065 50.3648 11.2835 50.3648 13.3345C50.3648 15.3855 48.8878 16.8625 47.0118 16.8625C46.0598 16.8625 45.3738 16.4775 44.9118 15.8895V16.6875H43.4488V6.6075H44.9118V10.7795C45.3738 10.1915 46.0598 9.8065 47.0118 9.8065ZM46.8368 11.1855C45.6258 11.1855 44.8138 12.1095 44.8138 13.3345C44.8138 14.5595 45.6258 15.4835 46.8368 15.4835C48.0968 15.4835 48.8598 14.5105 48.8598 13.3345C48.8598 12.1585 48.0968 11.1855 46.8368 11.1855ZM58.4204 9.9815L53.1284 19.5295H51.5044L53.9054 15.3085L50.9304 9.9815H52.5754L54.7314 13.8315L56.8104 9.9815H58.4204Z"
          fill="white"
        />
        <g clipPath="url(#clip0_9480_9881)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.8214 24.6875H74.1867C67.4635 24.6875 62 19.3059 62 12.6915C62 6.07703 67.4635 0.6875 74.1867 0.6875H94.8214C101.536 0.6875 107.008 6.06913 107.008 12.6915C107.008 19.3138 101.536 24.6875 94.8214 24.6875ZM79.4977 9.57002L77.6685 10.6764C77.0668 9.76758 76.096 9.23021 74.9086 9.23021C72.9751 9.23021 71.5391 10.629 71.5391 12.6678C71.5471 14.7778 73.0233 16.1054 74.9086 16.1054C76.0238 16.1291 77.0748 15.5838 77.6926 14.6672L79.4255 15.9C78.4788 17.2671 76.8742 18.1206 74.9247 18.1206C71.6434 18.1206 69.3248 15.8288 69.3248 12.6757C69.3248 9.5226 71.6434 7.23087 74.9247 7.23087C76.8903 7.21506 78.6312 8.10014 79.4977 9.57002ZM88.2668 17.915H90.2645L90.2725 7.41259H88.1384V14.43L82.723 7.41259H80.7334V17.915H82.8594V10.8976L88.2668 17.915ZM94.6448 18.1047C96.8751 18.1047 98.4717 16.7218 98.4717 14.0902H98.4637V7.41259H96.3376V13.8927C96.3376 15.41 95.6717 16.0975 94.5405 16.0975C93.7382 16.1133 92.968 15.7498 92.4706 15.1255L91.2351 16.6507C91.8208 17.3461 92.8798 18.1047 94.6448 18.1047Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_9480_9881">
            <rect
              width="45"
              height="24"
              fill="white"
              transform="translate(62 0.6875)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}
