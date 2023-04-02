import React from "react";
import styles from "./Button.module.css";
import { Button as MuiButton } from "@mui/material";

export const Button: React.FC<{
  label: string;
  isActive?: boolean;
  width?: number;
  onClick?: (arg: any) => void;
}> = ({ label, width, isActive }) => {
  return (
    <div className={`${styles.btn} ${isActive ? styles.selected : ""}`}>
      {/* <i className="fab fa-facebook-f"></i> */}
      <div>{label}</div>
    </div>
  );
};
