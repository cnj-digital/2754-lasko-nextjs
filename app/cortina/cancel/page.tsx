"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CortinaCancel from "@/components/Pages/CortinaCancel";

// Basic UUID validation function
const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

function CortinaCancelPageContent() {
  const searchParams = useSearchParams();
  
  const uuid = searchParams.get("uuid");
  const signature = searchParams.get("signature");

  if (!uuid || !signature || !isValidUUID(uuid)) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800 flex items-center justify-center px-4">
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
            Povezava za preklic prijave je neveljavna ali je potekla.
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Nazaj na domačo stran
          </Link>
        </div>
      </div>
    );
  }

  return (
    <CortinaCancel
      uuid={uuid}
      signature={signature}
    />
  );
}

export default function CortinaCancelPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-6"></div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Nalagam...
          </h1>
        </div>
      </div>
    }>
      <CortinaCancelPageContent />
    </Suspense>
  );
}
