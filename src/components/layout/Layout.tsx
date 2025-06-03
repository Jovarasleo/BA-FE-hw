import type { ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "./layout.scss";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
