import React from "react";

const IGIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00008 1.82007C7.07637 1.82007 6.83553 1.82833 6.07998 1.86257C3.50755 1.98062 2.07789 3.40792 1.95984 5.98271C1.92501 6.73885 1.91675 6.97969 1.91675 8.9034C1.91675 10.8271 1.92501 11.0685 1.95925 11.8241C2.0773 14.3965 3.5046 15.8262 6.07939 15.9442C6.83553 15.9785 7.07637 15.9867 9.00008 15.9867C10.9238 15.9867 11.1652 15.9785 11.9208 15.9442C14.4908 15.8262 15.924 14.3989 16.0403 11.8241C16.0752 11.0685 16.0834 10.8271 16.0834 8.9034C16.0834 6.97969 16.0752 6.73885 16.0409 5.9833C15.9252 3.41323 14.4962 1.98121 11.9214 1.86316C11.1652 1.82833 10.9238 1.82007 9.00008 1.82007ZM9.00008 5.26611C6.99137 5.26611 5.36279 6.89469 5.36279 8.9034C5.36279 10.9121 6.99137 12.5413 9.00008 12.5413C11.0088 12.5413 12.6374 10.9127 12.6374 8.9034C12.6374 6.89469 11.0088 5.26611 9.00008 5.26611ZM9.00008 11.2645C7.69616 11.2645 6.63897 10.2079 6.63897 8.9034C6.63897 7.59948 7.69616 6.54229 9.00008 6.54229C10.304 6.54229 11.3612 7.59948 11.3612 8.9034C11.3612 10.2079 10.304 11.2645 9.00008 11.2645ZM12.7814 4.27267C12.3115 4.27267 11.9308 4.6534 11.9308 5.12267C11.9308 5.59194 12.3115 5.97267 12.7814 5.97267C13.2507 5.97267 13.6308 5.59194 13.6308 5.12267C13.6308 4.6534 13.2507 4.27267 12.7814 4.27267Z"
        fill={color}
      />
    </svg>
  );
};

export default IGIcon;
