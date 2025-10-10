import { fetchFooter, fetchNavigation } from "@/api/fetch";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer"; 

export default async function Layout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = await fetchNavigation("si");
  const footer = await fetchFooter("si");

  return (
    <>
      <Menu nav={navigation.map((item: any) => item.page)} />  
      <main>{children}</main>
      <Footer {...footer} />
    </>
  );
}
