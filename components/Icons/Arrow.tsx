import React from "react";

interface ArrowIconProps {
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 5v11.17L6.12 11.29a1 1 0 0 0-1.42 1.41l6.59 6.59a1 1 0 0 0 1.42 0l6.59-6.59a1 1 0 0 0-1.42-1.41L13 16.17V5a1 1 0 0 0-2 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowIcon;
