import React from "react";
import NavLink from "./NavLink";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
  height?: "sm" | "md" | "lg" | string;
  backgroundColor?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  links,
  height = "md",
  backgroundColor = "bg-primary",
  className = "",
}) => {
  const heightClasses = {
    sm: "py-2",
    md: "py-4",
    lg: "py-6",
  };

  const heightClass =
    heightClasses[height as keyof typeof heightClasses] || height;

  return (
    <footer
      className={`${backgroundColor} ${heightClass} ${className} text-white`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              {links.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
