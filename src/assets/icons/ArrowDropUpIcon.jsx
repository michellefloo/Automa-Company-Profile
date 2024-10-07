import React from "react";

const ArrowDropUpIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 14L12 9L17 14H7Z" fill={color} />
    </svg>
  );
};

export default ArrowDropUpIcon;
