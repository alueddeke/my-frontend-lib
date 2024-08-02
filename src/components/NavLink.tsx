// src/components/NavLink.tsx
import React, { ReactNode } from "react";

/**
 * NavLink Component
 * Use case: Creates a customizable navigation link for use in navigation menus, with support for active state styling
 */

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
  activeClassName = "",
  isActive = false,
  onClick,
}) => {
  const baseClasses = "px-3 py-2 rounded-md text-sm font-medium";
  const defaultClasses = "text-gray-300 hover:bg-gray-700 hover:text-white";
  const activeClasses = "bg-gray-900 text-white";

  const computedClasses = `${baseClasses} ${
    isActive ? activeClasses : defaultClasses
  } ${className} ${isActive ? activeClassName : ""}`.trim();

  return (
    <a href={href} className={computedClasses} onClick={onClick}>
      {children}
    </a>
  );
};

export default NavLink;
