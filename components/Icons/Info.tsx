import React from "react";

interface InfoIconProps {
  className?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 7h2v2h-2V7zm1 10c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm0-14.5C6.48 2.5 2 6.98 2 12.5S6.48 22.5 12 22.5s10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InfoIcon;
