import React from "react";

interface CloseIconProps {
  className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.4875 5.50417C25.8375 4.85417 24.7875 4.85417 24.1375 5.50417L15.9875 13.6375L7.8375 5.4875C7.1875 4.8375 6.1375 4.8375 5.4875 5.4875C4.8375 6.1375 4.8375 7.1875 5.4875 7.8375L13.6375 15.9875L5.4875 24.1375C4.8375 24.7875 4.8375 25.8375 5.4875 26.4875C6.1375 27.1375 7.1875 27.1375 7.8375 26.4875L15.9875 18.3375L24.1375 26.4875C24.7875 27.1375 25.8375 27.1375 26.4875 26.4875C27.1375 25.8375 27.1375 24.7875 26.4875 24.1375L18.3375 15.9875L26.4875 7.8375C27.1208 7.20417 27.1208 6.1375 26.4875 5.50417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloseIcon;
