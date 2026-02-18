import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  isActive?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, isActive }) => {
  return (
    <span
      className={`${styles.btn} ${isActive ? styles.selected : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </span>
  );
};
