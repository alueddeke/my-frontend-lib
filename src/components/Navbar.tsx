import React from "react";
import NavLink from "./NavLink";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
  onLogin?: () => void;
  onSignup?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, onLogin, onSignup }) => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-md">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-primary font-bold text-xl">
              Logo
            </a>
            <div className="ml-lg space-x-md hidden md:flex">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="space-x-sm hidden md:flex">
            {onLogin && (
              <Button variant="outline" size="sm" onClick={onLogin}>
                Login
              </Button>
            )}
            {onSignup && (
              <Button size="sm" onClick={onSignup}>
                Sign Up
              </Button>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              size="sm"
              onClick={() => console.log("Mobile menu clicked")}
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
