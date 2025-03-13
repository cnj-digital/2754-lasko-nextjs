import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import AgeVerificationCheck from "@/components/AgeVerificationCheck";
import PlausibleProvider from "next-plausible";
import { CookieProvider } from "@/components/Cookies/CookieContext";
import CookieNotice from "@/components/Cookies/CookieNotice";
import Scripts from "@/components/Scripts";
import { TranslationProvider } from "@/components/TranslationContext";
import { fetchAgeVerification, fetchTranslations } from "@/api/fetch";

const neutrafaceDisplay = localFont({
  src: "./fonts/Neutraface_Display-Titling.woff2",
  variable: "--font-Neutraface-Display",
  weight: "400 500 600 700 900",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pivovarna Laško",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const translationsEn = await fetchTranslations("en");
  const translationsSi = await fetchTranslations("si");
  const ageVerificationEn = await fetchAgeVerification("en");
  const ageVerificationSi = await fetchAgeVerification("si");

  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="lasko.eu"
          selfHosted={true}
          customDomain="https://plausible.cnj.digital"
        />
      </head>
      <body
        className={` ${raleway.variable} ${neutrafaceDisplay.variable} antialiased bg-white min-h-screen`}
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "1920px 912px",
        }}
      >
        <TranslationProvider
          initialTranslations={{ en: translationsEn, si: translationsSi }}
        >
          <AgeVerificationCheck
            ageVerification={{ en: ageVerificationEn, si: ageVerificationSi }}
          >
            <CookieProvider>
              <Scripts />
              <CookieNotice />
              {children}
            </CookieProvider>
          </AgeVerificationCheck>
        </TranslationProvider>
      </body>
    </html>
  );
}
