"use client";
import ArticleHero from "@/components/Builder/Hero";
import Container from "@/components/Container";
import { useRouter } from "next/navigation"; 
import ButtonSolid from "@/components/Buttons/Solid";

export default function Event({
  title,
  featured_image,
  content,
}: any) {
  const router = useRouter();

  return (
    <div className="">
      <ArticleHero
        title={title}
        backgroundUrl={featured_image?.permalink}
      />
      <Container className="mx-auto mt-10">
        {content && (
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        )}
        <div className="mt-8">
          <ButtonSolid
            title={
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M9.41906 1.19128C9.68917 1.46139 9.82422 1.80515 9.82422 2.22259C9.82422 2.64002 9.68917 2.98379 9.41906 3.2539L3.6732 8.99975L9.41906 14.7456C9.68917 15.0157 9.82422 15.3595 9.82422 15.7769C9.82422 16.1943 9.68917 16.5381 9.41906 16.8082C9.14896 17.0783 8.80519 17.2134 8.38776 17.2134C7.97032 17.2134 7.62655 17.0783 7.35645 16.8082L0.579283 10.0311C0.431954 9.88373 0.327349 9.72412 0.265471 9.55224C0.204574 9.38035 0.174126 9.19619 0.174126 8.99975C0.174126 8.80331 0.204574 8.61915 0.265471 8.44727C0.327349 8.27538 0.431954 8.11577 0.579283 7.96845L7.35645 1.19128C7.62655 0.921177 7.97032 0.786123 8.38775 0.786123C8.80519 0.786123 9.14896 0.921177 9.41906 1.19128Z"
                    fill="currentColor"
                  />
                </svg>
                Nazaj
              </span>
            }
            type="button"
            onClick={() => {
              router.back();
              // Wait for navigation to complete, then scroll
              setTimeout(() => {
                const section = document.getElementById('events');
                if (section) {
                  const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({ top: sectionTop - 100, behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center"
          />
        </div>
      </Container>
    </div>
  );
}


