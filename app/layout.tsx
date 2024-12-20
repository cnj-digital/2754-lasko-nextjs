import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import AgeVerificationCheck from "@/components/AgeVerificationCheck";
import Head from "next/head";

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
  return (
    <html lang="en">
      <Head>
        <script
          defer
          data-domain="lasko.eu"
          src="https://plausible.cnj.digital/js/script.js"
        ></script>
      </Head>
      <body
        className={` ${raleway.variable} ${neutrafaceDisplay.variable} antialiased bg-white min-h-screen `}
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "1920px 912px",
        }}
      >
        <AgeVerificationCheck>{children}</AgeVerificationCheck>
      </body>
    </html>
  );
}
