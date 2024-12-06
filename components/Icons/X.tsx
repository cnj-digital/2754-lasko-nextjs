import React from "react";

interface XIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const XIcon: React.FC<XIconProps> = ({
  className = "",
  size = 32,
  color = "white",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.0425 3.24707C4.56826 3.24707 2.5625 5.25283 2.5625 7.72707V25.6471C2.5625 28.1213 4.56826 30.1271 7.0425 30.1271H24.9625C27.4367 30.1271 29.4425 28.1213 29.4425 25.6471V7.72707C29.4425 5.25283 27.4367 3.24707 24.9625 3.24707H7.0425ZM8.3775 9.00707H13.4575L17.065 14.1333L21.4425 9.00707H23.0425L17.7875 15.1596L24.2675 24.3671H19.1887L15.0025 18.4196L9.9225 24.3671H8.3225L14.28 17.3933L8.3775 9.00707ZM10.8275 10.2871L19.8562 23.0871H21.8175L12.7887 10.2871H10.8275Z"
        fill={color}
      />
    </svg>
  );
};

export default XIcon;
