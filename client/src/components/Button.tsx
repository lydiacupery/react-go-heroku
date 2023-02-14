import React from "react";
import * as classes from "./Button.module.css";

export const Button: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className={classes.btn}>
      {/* <i className="fab fa-facebook-f"></i> */}
      <div>{label}</div>
    </div>
  );
};
