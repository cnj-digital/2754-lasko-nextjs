import "../globals.css";
import { fetchFooter, fetchNavigation } from "@/api/fetch";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const lang = await params.slug[0];

  const navigation = await fetchNavigation(lang);
  const footer = await fetchFooter(lang);

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "1920px 912px",
        }}
      >
        <Menu nav={navigation.map((item: any) => item.page)} />
        <main>{children}</main>
        <Footer nav={footer} />
      </div>
    </>
  );
}
