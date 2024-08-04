import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const OutwardArrow: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
    />
  </svg>
);

export default OutwardArrow;
