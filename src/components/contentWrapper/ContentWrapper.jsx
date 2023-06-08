import React from "react";
import styles from "./styles.module.css";

const ContentWrapper = ({ children, className = "" }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
export default ContentWrapper;
