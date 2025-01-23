import { fetchFooter, fetchNavigation } from "@/api/fetch";
import Page404 from "@/components/Page404";

export default async function NotFound() {
  const navigationSi = await fetchNavigation("si");
  const footerSi = await fetchFooter("si");
  const navigationEn = await fetchNavigation("en");
  const footerEn = await fetchFooter("en");

  return (
    <Page404
      navigation={{ si: navigationSi, en: navigationEn }}
      footer={{ si: footerSi, en: footerEn }}
    />
  );
}
