import React, { ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  borderColor?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  bgColor = "#2563EB",
  textColor = "white",
  onClick,
  borderColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={styles.button}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
      onClick={onClick}
    >
      {leftIcon && (
        <span className={`${styles.icon} ${styles.leftIcon}`}>{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className={`${styles.icon} ${styles.rightIcon}`}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
