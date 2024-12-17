import React from "react";

const LinkIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.391 23.4325C13.0915 25.9181 9.33448 25.9154 7.28125 23.5794C5.20373 21.2158 5.93939 17.5681 8.53399 15.6307C11.2812 13.5794 14.6146 10.9127 17.2813 14.3046"
        stroke="currentColor"
        strokeWidth="2.66667"
        strokeLinecap="round"
      />
      <path
        d="M17.8394 8.796C20.139 6.31046 23.896 6.3131 25.9492 8.64908C28.0267 11.0127 27.2911 14.6605 24.6965 16.5978C21.9492 18.6491 18.6159 21.3159 15.9492 17.9239"
        stroke="currentColor"
        strokeWidth="2.66667"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LinkIcon;
