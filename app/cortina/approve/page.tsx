"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CortinaApproval from "@/components/Pages/CortinaApproval";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

type NavigationItem = any;
type FooterData = any;

export default function CortinaApprovePage() {
  const searchParams = useSearchParams();
  const [navigation, setNavigation] = useState<NavigationItem[]>([]);
  const [footer, setFooter] = useState<FooterData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const submission = searchParams.get("submission");
  const signature = searchParams.get("signature");
  const expires = searchParams.get("expires");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [navRes, footerRes] = await Promise.all([
          fetch("/api/navigation?site=si"),
          fetch("/api/footer?site=si")
        ]);
        
        if (navRes.ok) {
          const navData = await navRes.json();
          setNavigation(navData.map((item: any) => item.page));
        }
        
        if (footerRes.ok) {
          const footerData = await footerRes.json();
          setFooter(footerData);
        }
      } catch (error) {
        console.error("Error fetching navigation/footer:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-6"></div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Nalagam...
          </h1>
        </div>
      </div>
    );
  }

  if (!submission || !signature || !expires) {
    return (
      <>
        <Menu nav={navigation} />
        <main className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Neveljavna povezava
            </h1>
            <p className="text-gray-600 mb-6">
              Povezava za potrjevanje prijave je neveljavna ali je potekla.
            </p>
            <Link
              href="/"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Nazaj na domačo stran
            </Link>
          </div>
        </main>
        {footer && <Footer {...footer} />}
      </>
    );
  }

  return (
    <>
      <Menu nav={navigation} />
      <main>
        <Suspense fallback={
          <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-6"></div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Nalagam...
              </h1>
            </div>
          </div>
        }>
          <CortinaApproval
            submission={submission}
            signature={signature}
            expires={expires}
          />
        </Suspense>
      </main>
      {footer && <Footer {...footer} />}
    </>
  );
}
