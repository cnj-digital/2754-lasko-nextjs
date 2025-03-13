"use client";
import ButtonSolid from "@/components/Buttons/Solid";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { usePathname } from "next/navigation";

export default function Page404({
  navigation,
  footer,
  content,
}: {
  navigation: any;
  footer: any;
  content: any;
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
          {content[lang].title_text}
        </p>
        <ButtonSolid
          url={content[lang].cta.link}
          title={content[lang].cta.title}
          className="mt-6 lg:mt-10 mx-auto block w-max "
        />
      </Container>
      <Footer {...footer[lang]} />
    </main>
  );
}
