import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Instagram: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
      />
      <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m17.5 6.51l.01-.011"
      />
    </g>
  </svg>
);

export default Instagram;
