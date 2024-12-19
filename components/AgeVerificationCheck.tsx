"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";

export default function AgeVerificationCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verifiedTimestamp = localStorage.getItem("age-verified");
    const isVerified = verifiedTimestamp
      ? new Date().getTime() - parseInt(verifiedTimestamp) <
        // one month to show again
        30 * 24 * 60 * 60 * 1000
      : false;

    if (!isVerified) {
      localStorage.setItem("age-verified", new Date().getTime().toString());
    }
    if (!isVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("age-verified", new Date().getTime().toString());
    setIsOpen(false);
  };

  const handleDeny = () => {
    try {
      window.history.back();
    } catch {
      window.close();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            as={motion.div}
            open={isOpen}
            onClose={() => {}}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50"
            />

            <motion.div
              className="fixed inset-0 overflow-y-auto bg-cover"
              style={{ backgroundImage: 'url("/bg-green.jpg")' }}
            >
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  as={motion.div}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    scale: 0.95,
                    opacity: 0,
                  }}
                  className=" overflow-hidden rounded-lg lg:p-6 text-center mb-20 lg:mb-40 w-full"
                >
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-32 lg:w-40 mx-auto object-contain"
                  />
                  <DialogTitle className=" text-[36px] leading-snug lg:text-[52px] mt-10 lg:mt-20 font-black font-neutraface text-white mb-8">
                    STE POLNOLETNI?
                  </DialogTitle>

                  <div className="flex justify-center gap-4 lg:gap-6">
                    <button
                      onClick={handleDeny}
                      className="inline-block px-6  lg:px-8 py-4  lg:py-6 text-2xl lg:text-[40px]  font-bold text-white bg-black bg-opacity-20 hover:bg-opacity-50    rounded-2xl transition"
                    >
                      NE
                    </button>
                    <button
                      onClick={handleVerify}
                      className="inline-block px-6  lg:px-8 py-4  lg:py-6 text-white text-2xl lg:text-[40px]  font-bold  bg-black bg-opacity-20 hover:bg-opacity-50   rounded-2xl transition-colors"
                    >
                      DA
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
