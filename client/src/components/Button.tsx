import React from "react";
import styles from "./Button.module.css";

export const Button: React.FC<{
  label: string;
  width?: number;
  onClick?: (arg: any) => void;
}> = ({ label, width }) => {
  return (
    <div className={styles.btn}>
      {/* <i className="fab fa-facebook-f"></i> */}
      <div>{label}</div>
    </div>
  );
};
