import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  height?: "sm" | "md" | "lg" | "full" | string;
  overlay?: boolean;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  height = "md",
  overlay = true,
  children,
}) => {
  const heightClasses = {
    sm: "h-64",
    md: "h-96",
    lg: "h-128",
    full: "h-screen",
  };

  const heightClass =
    heightClasses[height as keyof typeof heightClasses] || height;

  return (
    <div
      className={`relative flex items-center justify-center ${heightClass} bg-gray-800 text-white`}
      style={
        imageSrc
          ? {
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {overlay && imageSrc && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Hero;
