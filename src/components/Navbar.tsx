// src/components/Navbar.tsx
import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  children,
  className = "",
  bgColor = "bg-gray-800",
}) => {
  return (
    <nav className={`${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">{children}</div>
      </div>
    </nav>
  );
};

export default Navbar;
