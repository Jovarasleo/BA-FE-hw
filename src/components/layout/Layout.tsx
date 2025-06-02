import type { ReactNode } from "react";
import { Header } from "../header/Header";
import "./layout.scss";
import { Footer } from "../footer/Footer";

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
