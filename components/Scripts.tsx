"use client";
import Script from "next/script";
import { useCookie } from "./Cookies/CookieContext";

export default function Scripts() {
  const { analytical, marketing } = useCookie();

  return (
    <>
      {analytical && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-Z0DLCTRBF5"
            async
            id="gtm-script"
          />
          <Script id="gtm">
            {` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-Z0DLCTRBF5');`}
          </Script>
        </>
      )}
      {analytical && (
        <Script id="ms_clarity">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "prlwan2bbt");`}
        </Script>
      )}
      {marketing && (
        <Script id="meta_pixel">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1376660342704490');fbq('track', 'PageView');`}
        </Script>
      )}
    </>
  );
}
