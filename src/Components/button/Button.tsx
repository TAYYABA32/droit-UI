import React, { ReactNode } from "react";
import "./button.css"; // Remove import statement for CSS file

interface ButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  borderColor?: string;
  children: ReactNode;
  widthProp?: "fit" | "full";
}

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  bgColor = "#2563EB",
  textColor = "white",
  onClick,
  borderColor,
  widthProp,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className="button"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
        width: widthProp === "full" ? "100%" : "fit-content",
      }}
      onClick={onClick}
    >
      {leftIcon && <span className={`icon leftIcon`}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={`icon rightIcon`}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
