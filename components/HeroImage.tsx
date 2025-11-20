import React from "react";
import ButtonSolid from "./Buttons/Solid";
import Container from "./Container";
import ArrowIcon from "./Icons/Arrow";
import cx from "classnames";

interface HeroImageProps {
  title: string;
  copy?: string;
  buttons?: {
    title: string;
    url: string;
  }[];
  image?: string;
  right_bg_image_mobile?: string;
  hero_main_bg?: string;
  hero_main_bg_mobile?: string;
  type?: string;
}

export default function HeroImage({
  title,
  copy,
  buttons,
  image,
  right_bg_image_mobile,
  hero_main_bg,
  hero_main_bg_mobile,
  type,
}: HeroImageProps) {
  // Determine background images
  const fallbackBg = "/bg-green.jpg";
  const mobileBg = hero_main_bg_mobile || hero_main_bg || fallbackBg;
  const desktopBg = hero_main_bg || fallbackBg;
  const showSeparateBackgrounds = hero_main_bg_mobile && hero_main_bg;
  const singleBg = hero_main_bg_mobile || hero_main_bg || fallbackBg;

  return (
    <div
      className="relative w-full max-w-8xl mx-auto overflow-hidden bg-cover bg-center rounded-b-3xl"
      style={!showSeparateBackgrounds ? { backgroundImage: `url('${singleBg}')` } : undefined}
    >
      {showSeparateBackgrounds && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center lg:hidden rounded-b-3xl"
            style={{ backgroundImage: `url('${mobileBg}')` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center hidden lg:block rounded-b-3xl"
            style={{ backgroundImage: `url('${desktopBg}')` }}
          />
        </>
      )}
      <Container className="pt-40 lg:pt-44">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:max-w-8/12 text-white z-10 lg:pb-16">
            <h1 className="text-[40px] md:text-[52px] leading-tight  font-neutraface  font-bold mb-6 md:w-1/2">
              {title}
            </h1>

            {copy && (
              <div
                dangerouslySetInnerHTML={{ __html: copy }}
                className="font-semibold md:w-1/2"
              ></div>
            )}

            {buttons && (
              <div className="flex flex-wrap md:flex-nowrap lg:w-full -mx-6 px-6 lg:mx-0 lg:px-0 overflow-auto no-scrollbar items-center gap-4 mb-16 mt-10">
                {buttons.map((button, i) => (
                  <ButtonSolid
                    size="small"
                    url={button.url}
                    title={button.title}
                    key={i}
                    className="flex-shrink-0"
                    icon={<ArrowIcon className="size-6" />}
                  />
                ))}
              </div>
            )}
          </div>

          {type === "cortina" ? (
            image && (
            <div className="md:w-6/12 mt-8 md:mt-0 absolute bottom-0 right-0">
              {right_bg_image_mobile && (
                <img 
                  src={right_bg_image_mobile} 
                  className="w-full object-cover mix-blend-multiply lg:hidden" 
                  alt={title} 
                />
              )}
              <img 
                src={image} 
                className={cx(
                  "w-full object-cover mix-blend-multiply",
                  right_bg_image_mobile && "hidden lg:block"
                )} 
                alt={title} 
              />
            </div>
            )
          ) : (
            <>
              {image && (
                <div className="-mx-6 md:mx-0 md:w-1/2 mt-8 md:mt-0">
                  <img
                    src={image}
                    className="w-full object-cover mix-blend-multiply"
                    alt={title}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
