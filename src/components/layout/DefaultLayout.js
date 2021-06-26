import React from "react";
import { Footer } from "./partial/Footer.comp";
import { Header } from "./partial/Header.com";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
