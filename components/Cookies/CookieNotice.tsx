"use client";

import cx from "classnames";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Switch,
} from "@headlessui/react";

import { useState } from "react";
import { useCookie } from "./CookieContext";
import ButtonSolid from "../Buttons/Solid";
import Chevron from "../Icons/Chevron";
import { useTranslations } from "../TranslationContext";

// type CookieType = {
//   type: "essential" | "analytical" | "marketing";
//   title: string;
//   toggle?: string;
//   description: string;
//   moreTitle?: string;
//   moreHref?: string;
// };

// const types: CookieType[] = [
//   {
//     type: "essential",
//     title: "Essential Cookies",
//     toggle: "Always active",
//     description:
//       "Essential cookies or strictly necessary cookies are cookies that are essential for a website to function correctly. These are cookies are necessary to provide an online service on a website or used solely to carry out or facilitate the transmission of communications over a network.",
//     moreTitle: "More information about essential cookies",
//     moreHref: "#",
//   },
//   {
//     type: "analytical",
//     title: "Analytical Cookies",
//     description:
//       "Analytics cookies are cookies that track how users navigate and interact with a website. The information collected is used to help the website owner improve the website.",
//     moreTitle: "More information about analytical cookies",
//     moreHref: "#",
//   },
//   {
//     type: "marketing",
//     title: "Marketing Cookies",
//     description:
//       "Cookies or any other form of local storage required to create user profiles to send advertising, or to track the user on a website or across several websites for similar marketing purposes.",
//     moreTitle: "More information about marketing cookies",
//     moreHref: "#",
//   },
// ];

// const placeholders = {
//   types,
//   title: "Piškotki poskrbijo, da brskanje steče kot pivo! 🍻",
//   description: `To spletno mesto vedno uporablja piškotke, ki so nujni za njegovo delovanje, z vašim soglasjem pa tudi analitične in oglaševalske piškotke. Z izborom opcije »Strinjam se« se bodo na vašo napravo namestili vsi piškotki. Če tega ne želite, to lahko spremenite s klikom na »Prilagodite nastavitve«. Več informacij najdete v politiki piškotkov in politiki zasebnosti.`,
//   showSettings: "Prilagodite nastavitve",
//   acceptOnlyEssential: "Accept only essential",
//   acceptAll: "Accept all",
//   acceptSelected: "Accept selected",
// };

export default function CookieNotice({ className }: { className?: string }) {
  const {
    marketing,
    setMarketing,
    analytical,
    setAnalytical,
    isBannerOpen,
    setIsBannerOpen,
  } = useCookie();
  const [showSettings, setShowSettings] = useState(false);
  const { translations: translationsCurrent } = useTranslations();

  if (!isBannerOpen || !translationsCurrent) return null;

  const translations = {
    title: translationsCurrent.cookie_title,
    description: translationsCurrent.cookie_description,
    showSettings: translationsCurrent.show_settings,
    acceptOnlyEssential: translationsCurrent.accept_only_essential,
    acceptAll: translationsCurrent.accept_all,
    acceptSelected: translationsCurrent.accept_selected,
    types: [
      {
        type: "essential",
        title: translationsCurrent.essential_title,
        toggle: translationsCurrent.always_active,
        description: translationsCurrent.essential_description,
      },
      {
        type: "analytical",
        title: translationsCurrent.analytical_title,
        description: translationsCurrent.analytical_description,
      },
      {
        type: "marketing",
        title: translationsCurrent.marketing_title,
        description: translationsCurrent.marketing_description,
      },
    ],
  };

  function acceptAll() {
    setMarketing(true);
    setAnalytical(true);
    setIsBannerOpen(false);
    setShowSettings(false);
  }

  function acceptSelected() {
    setIsBannerOpen(false);
    setShowSettings(false);
  }

  function acceptOnlyEssential() {
    setMarketing(false);
    setAnalytical(false);
    setIsBannerOpen(false);
  }

  return (
    <div
      className={cx(
        className,
        "fixed bottom-6 sm:right-6 p-4 isolate z-[100] w-screen  sm:w-full sm:max-w-xl antialiased"
      )}
    >
      <div className="w-full p-6 bg-white shadow-card rounded-xl overflow-auto max-h-[80vh]">
        <div className="flex flex-col gap-6">
          <div className="text-black text-[19px] font-bold">
            {translations.title}
          </div>
          <div
            className="text-base [&_a]:text-green-500 [&_a]:underline text-[#666] [&_a]:font-medium "
            dangerouslySetInnerHTML={{ __html: translations.description }}
          />
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton
                    className="group items-center w-full bg-gray-50 rounded-full text-[15px] text-gray-500 py-3 px-4 text-center font-medium tracking-tight flex justify-center gap-2 hover:bg-opacity-80 duration-150"
                    onClick={() => {
                      setShowSettings(!open);
                    }}
                  >
                    {translations.showSettings}
                    <Chevron className="size-6 group-data-[open]:-rotate-90 rotate-90 duration-200" />
                  </DisclosureButton>
                  <DisclosurePanel className="flex flex-col gap-0.5">
                    {translations.types.map((type: any, index: number) => (
                      <div
                        key={index}
                        className="first:mt-2 first:rounded-t-xl lg:first:rounded-t-3xl last:rounded-b-xl lg:last:rounded-b-3xl bg-gray-50 pl-4 pr-2 lg:px-5 py-3"
                      >
                        <Disclosure>
                          <div className="flex items-center gap-2 lg:gap-4">
                            <span className="font-medium grow text-gray-600">
                              {type.title}
                            </span>
                            {type.toggle ? (
                              <span className="text-[15px] font-medium text-gray-500 shrink-0">
                                {type.toggle}
                              </span>
                            ) : (
                              <Switch
                                checked={
                                  type.type === "marketing"
                                    ? marketing
                                    : analytical
                                }
                                onChange={() => {
                                  if (type.type === "marketing") {
                                    setMarketing(!marketing);
                                  } else {
                                    setAnalytical(!analytical);
                                  }
                                }}
                                className="group inline-flex h-7 w-[52px] items-center rounded-full bg-[#CCCCCC] transition data-[checked]:bg-green-500 shrink-0"
                              >
                                <span className="sr-only">
                                  toggle {type.title}
                                </span>
                                <span className="size-[22px] translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-7" />
                              </Switch>
                            )}

                            <DisclosureButton className="group shrink-0 size-7 flex items-center justify-center">
                              <span className="sr-only">
                                open cookie details
                              </span>
                              <Chevron className="size-6 text-[#999999] group-data-[open]:-rotate-90 rotate-90 duration-200" />
                            </DisclosureButton>
                          </div>
                          <DisclosurePanel className="text-gray-500 text-[13px]">
                            <div className="pt-2">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: type.description,
                                }}
                              ></div>
                              {/* <div className="mt-2">
                                <Link
                                  href={type.moreHref}
                                  target="_blank"
                                  className="text-[#1A1A1A] underline font-medium"
                                >
                                  {type.moreTitle}
                                </Link>
                              </div> */}
                            </div>
                          </DisclosurePanel>
                        </Disclosure>
                      </div>
                    ))}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
          <button
            onClick={() => {
              if (showSettings) {
                acceptSelected();
              } else {
                acceptOnlyEssential();
              }
            }}
            className="bg-transparent rounded-full py-3 px-4 text-center font-medium tracking-tight text-green-500 hover:bg-opacity-80 hover:underline transition-all duration-150 whitespace-nowrap"
          >
            {showSettings
              ? translations.acceptSelected
              : translations.acceptOnlyEssential}
          </button>
          <ButtonSolid
            title={translations.acceptAll}
            onClick={() => acceptAll()}
            size="small"
            className="justify-center"
          />
        </div>
      </div>
    </div>
  );
}
