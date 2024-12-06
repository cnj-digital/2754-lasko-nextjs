import React from "react";

interface ArrowIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  className = "",
  size = 32,
  color = "white",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_9405_13436)">
        <path
          d="M8.00323 9.33236C8.00323 10.0657 8.60323 10.6657 9.33656 10.6657H19.4566L7.61656 22.5057C7.09656 23.0257 7.09656 23.8657 7.61656 24.3857C8.13656 24.9057 8.97656 24.9057 9.49656 24.3857L21.3366 12.5457V22.6657C21.3366 23.399 21.9366 23.999 22.6699 23.999C23.4032 23.999 24.0032 23.399 24.0032 22.6657V9.33236C24.0032 8.59902 23.4032 7.99902 22.6699 7.99902H9.33656C8.60323 7.99902 8.00323 8.59902 8.00323 9.33236Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_9405_13436">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowIcon;
