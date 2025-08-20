import type { ReactNode } from "react";
import type { SquareCorner, ContainerVariant } from "./ContainerTypes";
import styles from "./Container.module.scss";

interface CardProps {
    squareCorner?: SquareCorner;
    variant?: ContainerVariant;
    className?: string;
    children: ReactNode;
}

function Container({
    squareCorner = "none",
    variant = "white",
    className = "",
    children
}: CardProps) {
  return (
    <div className={`${styles['container']} ${styles[squareCorner]} ${styles[variant]} ${className}`}>
      {children}
    </div>
  )
};

export default Container;