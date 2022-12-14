import React from "react";

const UnloadIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17H15C16.1046 17 17 16.1046 17 15V6.82843C17 6.29799 16.7893 5.78929 16.4142 5.41421L12.5858 1.58579C12.2107 1.21071 11.702 1 11.1716 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V12H6V17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default React.memo(UnloadIcon);
