"use client";

import { useEffect, useState } from "react";
import BuilderComponent from "@/components/Builder/Builder";
import Container from "@/components/Container";
import HeroImage from "../HeroImage";
import HeroLanding from "../HeroLanding";
import PasswordPromptDialog from "@/PasswordPromptDialog";

export default function CortinaPage({
  cortina_hero,
  display_hero_v2,
  hero_v2,
  builder_items,
  globals,
  medijskeVsebineItems,
  medijskeVsebineKategorije,
  videosItems,
  eventsItems,
  protect_page,
  password,
}: any) {
  const [pageProtected, setPageProtected] = useState(
    () => protect_page === true
  );

  useEffect(() => {
    if (protect_page === true) {
      setPageProtected(true);
      if (password) {
        localStorage.setItem("pagePassword", password);
      }
    } else {
      localStorage.removeItem("pagePassword");
      setPageProtected(false);
    }
  }, [protect_page, password]);

  if (pageProtected) {
    return (
      <PasswordPromptDialog
        loggedIn={(loggedIn: boolean) => {
          if (loggedIn) {
            setPageProtected(false);
          }
        }}
      />
    );
  }

  // Add media, videos, and events data to globals
  const enhancedGlobals = {
    ...globals,
    medijskeVsebineItems: medijskeVsebineItems?.data || [],
    medijskeVsebineKategorije: medijskeVsebineKategorije?.data || [],
    videosItems,
    eventsItems,
  };
  return (
    <div className="">
      {cortina_hero && !display_hero_v2 && (
        <HeroImage
          type="cortina"
          title={cortina_hero.cortina_title}
          copy={cortina_hero.cortina_content}
          buttons={cortina_hero.cortina_ctas?.map((cta: any) => ({
            title: cta.cta.title,
            url: cta.cta.link,
          })) || []}
          image={cortina_hero.cortinabg_image?.[0]?.permalink || ""} 
          right_bg_image_mobile={cortina_hero.right_bg_image_mobile?.[0]?.permalink || ""}
          hero_main_bg={cortina_hero.hero_main_bg?.permalink || ""}
          hero_main_bg_mobile={cortina_hero.hero_main_bg_mobile?.permalink || ""}
        />
      )}
      {display_hero_v2 && (
        <HeroLanding
          title={hero_v2.herov2_title}
          description={hero_v2.herov2_description}
          backgroundUrl={hero_v2.herov2_background.permalink}
          backgroundMobileUrl={hero_v2.background_mobile?.permalink} 
          cta={hero_v2.cta}
          cta_second={hero_v2.cta_second}
        />
      )}
      <Container className=" mx-auto py-16 md:py-20">
        {builder_items?.map((content: any, i: number) => (
          <BuilderComponent
            key={i}
            type={content.type}
            data={content}
            globals={enhancedGlobals}
          />
        ))}
      </Container>
    </div>
  );
}


