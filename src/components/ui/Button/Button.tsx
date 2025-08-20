import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    variant?: "white" | "green";
    children: ReactNode;
}

function Button({
    variant = "white",
    children
}: ButtonProps) {
  return (
    <button className={`${styles["button"]} ${styles[variant]}`}>{children}</button>
  )
};

export default Button;