import type { ReactNode } from "react";
import clsx from "clsx";
import "./button.scss";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ children, className, onClick }: Props) => {
  return (
    <button className={clsx("button", className)} onClick={onClick}>
      {children}
    </button>
  );
};
