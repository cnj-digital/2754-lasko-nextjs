"use client";

import React, { useState } from "react";
import bcrypt from "bcryptjs";
import ButtonSolid from "@/components/Buttons/Solid";
import Input from "@/components/Builder/Form/Input";

interface PasswordPromptDialogProps {
  loggedIn: (status: boolean) => void;
}

const PasswordPromptDialog: React.FC<PasswordPromptDialogProps> = ({
  loggedIn,
}) => {
  const [password, setPassword] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const storedPassword = localStorage.getItem("pagePassword");

    if (!storedPassword) {
      setPasswordIncorrect(true);
      setLoading(false);
      return;
    }

    const sanitizedInput = password.trim();

    let match = false;
    if (storedPassword.startsWith("$2")) {
      // bcrypt hash stored
      match = await bcrypt.compare(sanitizedInput, storedPassword);
    } else {
      // plain text stored
      match = sanitizedInput === storedPassword;
    }

    setTimeout(() => {
      setLoading(false);
      if (match) {
        setPasswordIncorrect(false);
        loggedIn(true);
        //console.log("Password is correct");
      } else {
        setPasswordIncorrect(true);
        //console.log("Incorrect password");
      }
    }, 1000);
  };

  return (
    <div className="password-prompt-dialog fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 text-white bg-black/50"> 
      <div className="p-8 rounded-2xl bg-black/80 backdrop-blur">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[min(90vw,400px)]">
          <Input
            label="Geslo"
            required
            variant_input={{ value: "password" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordIncorrect) {
                setPasswordIncorrect(false);
              }
            }}
            showError={passwordIncorrect && password.trim() === ""}
            errorMessage="Prosimo, vnesite geslo."
            className="bg-white/90"
            classNameContainer="w-full"
          />
          <ButtonSolid
            title={loading ? "Preverjam..." : "Potrdi"}
            type="submit"
            className={`justify-center${loading ? " opacity-60 pointer-events-none" : ""}`}
            size="small"
          />
          {passwordIncorrect && password.trim() !== "" && (
            <p className="text-sm text-red-400 text-center">
              Napačno geslo. Poskusite znova.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PasswordPromptDialog;
