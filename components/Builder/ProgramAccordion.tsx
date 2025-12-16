"use client";
import { useState } from "react";

type ProgramItem = {
  title: string;
  title_mobile?: string;
  description: string;
  type?: string;
};

type ProgramAccordionProps = {
  program_title?: string;
  program?: ProgramItem[];
};

export default function ProgramAccordion({
  program_title,
  program = [],
}: ProgramAccordionProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  if (!program || program.length === 0) return null;

  return (
    <section id="program" className="max-w-8xl w-full mx-auto my-20">
      {program_title && (
        <h2 className="text-green-800 font-black text-[48px] md:text-[48px] leading-tight font-neutraface mb-6 md:mb-10">
          {program_title}
        </h2>
      )}
      <div className="space-y-3 md:space-y-5">
        {program.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={() =>
                setOpenAccordion(openAccordion === index ? null : index)
              }
              className="w-full px-6 py-3 flex items-center justify-between md:justify-start text-left transition-colors"
            >
              <h3 className="text-green-800 font-black text-[40px] md:text-[40px] leading-tight font-neutraface">
                <span className="hidden md:inline">{item.title}</span>
                <span className="md:hidden">
                  {item.title_mobile || item.title}
                </span>
              </h3>
              <svg
                className={`w-8 h-8 text-green-800 transition-transform ml-6 ${
                  openAccordion === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M8.45189 13.1933C8.73375 12.9114 9.09247 12.7705 9.52806 12.7705C9.96365 12.7705 10.3224 12.9114 10.6042 13.1933L16.6 19.1891L22.5958 13.1933C22.8776 12.9114 23.2364 12.7705 23.672 12.7705C24.1075 12.7705 24.4663 12.9114 24.7481 13.1933C25.03 13.4751 25.1709 13.8339 25.1709 14.2695C25.1709 14.705 25.03 15.0638 24.7481 15.3456L17.6762 22.4176C17.5224 22.5713 17.3559 22.6805 17.1765 22.745C16.9972 22.8086 16.805 22.8403 16.6 22.8403C16.395 22.8403 16.2028 22.8086 16.0235 22.745C15.8441 22.6805 15.6776 22.5713 15.5238 22.4176L8.45189 15.3456C8.17004 15.0638 8.02911 14.705 8.02911 14.2695C8.02911 13.8339 8.17004 13.4751 8.45189 13.1933Z"
                  fill="#044A16"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordion === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-8 pb-6">
                <div
                  className="prose prose-lg max-w-none text-black text-lg font-semibold"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

