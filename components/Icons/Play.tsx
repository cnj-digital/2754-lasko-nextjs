import React from "react";

const PlayIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M30.837 5.142C16.65 5.142 5.137 16.655 5.137 30.842s11.514 25.7 25.7 25.7c14.187 0 25.701-11.513 25.701-25.7s-11.514-25.7-25.7-25.7zm-6.425 32.562V23.98c0-2.03 2.262-3.264 3.958-2.159l10.666 6.862c1.567 1.003 1.567 3.316 0 4.318l-10.666 6.862c-1.696 1.105-3.958-.129-3.958-2.159z"
      fill="currentColor"
    />
  </svg>
);

export default PlayIcon;
