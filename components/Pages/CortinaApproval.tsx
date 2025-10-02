"use client";
import { useState, useEffect } from "react";
import ButtonSolid from "../Buttons/Solid";

type CortinaApprovalProps = {
  uuid: string; // UUID format (e.g., "550e8400-e29b-41d4-a716-446655440000")
  signature: string;
};

export default function CortinaApproval({
  uuid,
  signature,
}: CortinaApprovalProps) {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const approveSubmission = async () => {
      try {
        // Call Laravel backend directly (API routes don't work with static export)
        const backendBaseUrl = process.env.NEXT_PUBLIC_FORM_CORTINA_API || 'https://2754-lasko-statamic.test/api';
        const backendUrl = `${backendBaseUrl}/form-cortina/${uuid}/approve?signature=${signature}`;
        
        const response = await fetch(backendUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          // The backend returns the same message whether it was just approved or already approved
          // We can check if the status is 'approved' to determine if it was already approved
          if (data.status === 'approved') {
            setMessage(data.message || "Prijava je potrjena.");
            setTitle(data.title || "Prijava potrjena!");
          } else {
            setMessage(data.message || "Prijava je bila uspešno potrjena!");
            setTitle(data.title || "Prijava potrjena!");
          }
        } else {
          setStatus("error");
          setMessage(data.error || "Napaka pri potrjevanju prijave.");
          setTitle(data.title || "Napaka pri potrjevanju prijave.");
        }
      } catch {
        setStatus("error");
        setMessage("Napaka pri povezavi s strežnikom.");
        setTitle("Napaka pri povezavi s strežnikom.");
      }
    };

    approveSubmission();
  }, [uuid, signature]);

  return (
    <div>
      <div className="min-h-[150px] bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center px-4"></div>
      <div className="flex justify-center py-20 px-5">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {status === "loading" && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Potrjujem prijavo...
            </h1>
            <p className="text-gray-600">
              Prosimo počakajte, medtem ko potrjujemo vašo prijavo.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <ButtonSolid
              size="small"
              title="Nazaj na domačo stran"
              type="button"
              className="w-full justify-center"
              onClick={() => (window.location.href = "/")}
            />
          </>
        )}

        {status === "error" && (
          <>
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
              Napaka pri potrjevanju
            </h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <ButtonSolid
              size="small"
              title="Nazaj na domačo stran"
              type="button"
              className="w-full justify-center"
              onClick={() => (window.location.href = "/")}
            />
          </>
        )}
      </div>
      </div>
    </div>
  );
}
