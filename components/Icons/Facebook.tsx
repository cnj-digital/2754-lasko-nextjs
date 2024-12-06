import React from "react";

interface FacebookIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({
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
        d="M26.2425 3.24707H5.7625C3.9961 3.24707 2.5625 4.68067 2.5625 6.44707V26.9271C2.5625 28.6935 3.9961 30.1271 5.7625 30.1271H26.2425C28.0089 30.1271 29.4425 28.6935 29.4425 26.9271V6.44707C29.4425 4.68067 28.0089 3.24707 26.2425 3.24707ZM23.6825 12.8471H22.4025C21.0329 12.8471 20.4825 13.1671 20.4825 14.1271V16.0471H23.6825L23.0425 19.2471H20.4825V28.8471H17.2825V19.2471H14.7225V16.0471H17.2825V14.1271C17.2825 11.5671 18.5625 9.64707 21.1225 9.64707C22.9785 9.64707 23.6825 10.2871 23.6825 10.2871V12.8471Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
