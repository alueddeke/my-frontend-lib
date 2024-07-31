import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  textColor,
  ...props
}) => {
  const baseClasses = "font-sans rounded transition-colors";

  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark",
    secondary: "bg-secondary hover:bg-secondary-dark",
    outline: "bg-transparent border border-primary hover:bg-primary",
  };

  const sizeClasses = {
    sm: "px-sm py-xs text-sm",
    md: "px-md py-sm text-base",
    lg: "px-lg py-md text-lg",
  };

  // Use predefined sizes if available, otherwise use custom size
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses] || size;

  // Combine classes, giving precedence to custom className and textColor
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClass,
    textColor ||
      (variant !== "outline" ? "text-white" : "text-primary hover:text-white"),
    className,
  ].join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
