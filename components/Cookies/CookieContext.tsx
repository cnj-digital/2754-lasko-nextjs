"use client";

import React from "react";

const CookieContext = React.createContext<
  | {
      marketing: boolean;
      setMarketing: React.Dispatch<React.SetStateAction<boolean>>;
      analytical: boolean;
      setAnalytical: React.Dispatch<React.SetStateAction<boolean>>;
      isBannerOpen: boolean;
      setIsBannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [readFromLocalStorage, setReadFromLocalStorage] = React.useState(false);

  const [marketing, setMarketing] = React.useState(false);
  const [analytical, setAnalytical] = React.useState(false);
  const [isBannerOpen, setIsBannerOpen] = React.useState(false);

  React.useEffect(() => {
    const cookies = JSON.parse(localStorage.getItem("cookies") ?? "{}");

    if (cookies.marketing) {
      setMarketing(cookies.marketing);
    }

    if (cookies.analytical) {
      setAnalytical(cookies.marketing);
    }

    if (cookies.isBannerOpen !== undefined) {
      setIsBannerOpen(cookies.isBannerOpen);
    } else {
      setIsBannerOpen(true);
    }

    setReadFromLocalStorage(true);
  }, []);

  React.useEffect(() => {
    if (!readFromLocalStorage) {
      return;
    }

    localStorage.setItem(
      "cookies",
      JSON.stringify({
        marketing,
        analytical,
        isBannerOpen,
      })
    );
  }, [isBannerOpen, readFromLocalStorage]);

  return (
    <CookieContext.Provider
      value={{
        marketing,
        setMarketing,
        analytical,
        setAnalytical,
        isBannerOpen,
        setIsBannerOpen,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie() {
  const context = React.useContext(CookieContext);

  if (context === undefined) {
    throw new Error("useCookie must be used within a CookieProvider");
  }

  return context;
}
