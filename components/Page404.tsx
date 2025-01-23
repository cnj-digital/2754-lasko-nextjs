"use client";
import ButtonSolid from "@/components/Buttons/Solid";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { strings } from "@/data/general";
import { usePathname } from "next/navigation";

export default function Page404({
  navigation,
  footer,
}: {
  navigation: any;
  footer: any;
}) {
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1];
  const lang =
    currentLang === "en" || currentLang === "si" ? currentLang : "si";

  return (
    <main>
      <Menu nav={navigation[lang].map((item: any) => item.page)} />
      <Container className="py-20">
        <img
          src="/404.png"
          alt="404"
          className=" mt-20 max-h-[400px] mx-auto"
        />
        <p className="text-black text-center mx-auto max-w-xl text-2xl font-bold leading-[1.4] lg:text-[32px]">
          {strings[lang].notfound.copy}
        </p>
        <ButtonSolid
          url="/"
          title={strings[lang].notfound.cta}
          className="mt-6 lg:mt-10 mx-auto block w-max "
        />
      </Container>
      <Footer nav={footer[lang]} />
    </main>
  );
}
