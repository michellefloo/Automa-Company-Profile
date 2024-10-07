import React from "react";

const ArrowDropdownIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 15L7 10H17L12 15Z" fill={color} />
    </svg>
  );
};

export default ArrowDropdownIcon;
