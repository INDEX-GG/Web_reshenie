import React from "react";

const UpArrowIcon = () => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6L6 1L11 6" fill="#AAAAAA" />
      <path
        d="M1 6L6 1L11 6H1Z"
        stroke="#AAAAAA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default React.memo(UpArrowIcon);
