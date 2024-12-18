import React from "react";

const ExpandIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.626 22.762l3.559.023a1.44 1.44 0 0 1 1.32 1.32c0 .346-.133.652-.4.92-.268.266-.574.4-.92.4H8.397c-.377 0-.691-.126-.943-.377-.251-.252-.377-.566-.377-.943v-6.788c0-.378.13-.688.389-.931.259-.244.577-.366.954-.366.362.016.672.146.931.389.26.244.389.553.389.931v3.536L21.36 9.256h-3.535c-.377 0-.695-.13-.955-.389-.26-.259-.389-.577-.389-.955 0-.377.13-.695.389-.954.26-.259.578-.389.955-.389h6.788c.377 0 .692.126.943.377.252.251.377.566.377.943v6.788c0 .346-.126.652-.377.92-.252.267-.566.4-.943.4-.377 0-.7-.126-.966-.377-.267-.252-.401-.566-.401-.943v-3.536L11.626 22.762z"
      fill="currentColor"
    />
  </svg>
);

export default ExpandIcon;
