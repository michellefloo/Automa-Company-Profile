import React from "react";

const ArrowLeftIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.74375 6.14812C7.41875 6.47312 7.41875 6.99812 7.74375 7.32312L10.9771 10.5565L7.74375 13.7898C7.41875 14.1148 7.41875 14.6398 7.74375 14.9648C8.06875 15.2898 8.59375 15.2898 8.91875 14.9648L12.7438 11.1398C13.0688 10.8148 13.0688 10.2898 12.7438 9.96479L8.91875 6.13979C8.60208 5.82312 8.06875 5.82312 7.74375 6.14812Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeftIcon;
