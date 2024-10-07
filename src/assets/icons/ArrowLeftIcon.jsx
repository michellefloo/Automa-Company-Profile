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
        d="M12.2584 6.49497C11.9334 6.16997 11.4084 6.16997 11.0834 6.49497L7.2584 10.32C6.9334 10.645 6.9334 11.17 7.2584 11.495L11.0834 15.32C11.4084 15.645 11.9334 15.645 12.2584 15.32C12.5834 14.995 12.5834 14.47 12.2584 14.145L9.02506 10.9033L12.2584 7.66997C12.5834 7.34497 12.5751 6.81164 12.2584 6.49497Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeftIcon;
