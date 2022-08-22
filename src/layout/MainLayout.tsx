import Header from "components/Header/Header";
import React from "react";

interface IMMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMMainLayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default React.memo(MainLayout);
