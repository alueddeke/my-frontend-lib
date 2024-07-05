import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses = "font-sans rounded transition-colors";

  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-secondary hover:bg-secondary-dark text-white",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizeClasses = {
    sm: "px-sm py-xs text-sm",
    md: "px-md py-sm text-base",
    lg: "px-lg py-md text-lg",
  };

  // Use predefined sizes if available, otherwise use custom size
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses] || size;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClass} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
