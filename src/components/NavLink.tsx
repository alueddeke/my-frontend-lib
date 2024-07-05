import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-primary transition-colors px-sm py-xs rounded"
    >
      {children}
    </a>
  );
};

export default NavLink;
