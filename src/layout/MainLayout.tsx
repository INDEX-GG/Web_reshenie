import React from "react";

interface IMMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMMainLayoutProps) => {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default React.memo(MainLayout);
