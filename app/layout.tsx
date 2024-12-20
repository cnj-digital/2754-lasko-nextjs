import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Menu from "@/components/Menu";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import AgeVerificationCheck from "@/components/AgeVerificationCheck";
import { fetchFooter, fetchNavigation } from "@/api/fetch";

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
  const navigation = await fetchNavigation("si");
  const footer = await fetchFooter("si");

  return (
    <html lang="en">
      <body
        className={` ${raleway.variable} ${neutrafaceDisplay.variable} antialiased bg-white min-h-screen `}
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "1920px 912px",
        }}
      >
        <AgeVerificationCheck>
          <Menu nav={navigation.map((item: any) => item.page)} />
          {children}
          <Footer nav={footer} />
        </AgeVerificationCheck>
      </body>
    </html>
  );
}
