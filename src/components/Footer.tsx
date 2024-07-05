import React from "react";
import NavLink from "./NavLink";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
  height?: "sm" | "md" | "lg" | string;
  backgroundColor?: "primary" | "secondary" | "background" | string;
}

const Footer: React.FC<FooterProps> = ({
  links,
  height = "md",
  backgroundColor = "primary",
}) => {
  const heightClasses = {
    sm: "py-sm",
    md: "py-md",
    lg: "py-lg",
  };

  const bgColorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    background: "bg-background",
  };

  const heightClass =
    heightClasses[height as keyof typeof heightClasses] || height;
  const bgColorClass =
    bgColorClasses[backgroundColor as keyof typeof bgColorClasses] ||
    backgroundColor;

  return (
    <footer className={`${bgColorClass} ${heightClass} text-white`}>
      <div className="container mx-auto px-md">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-md md:mb-0">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-md">
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
