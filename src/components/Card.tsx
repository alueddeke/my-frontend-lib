// src/components/Card.tsx
import React from "react";

/**
 * Card Component
 * Use case: Displays content in a structured format, optionally including an image
 */

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  size?: "sm" | "md" | "lg" | string;
  imageSize?: string;
  className?: string; // Add this line
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  size = "md",
  imageSize = "h-48",
  className = "", // Add this line
}) => {
  const sizeClasses = {
    sm: "max-w-xs",
    md: "max-w-sm",
    lg: "max-w-md",
  };

  const sizeClass = sizeClasses[size as keyof typeof sizeClasses] || size;

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${sizeClass} ${className}`.trim()}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className={`w-full object-cover ${imageSize}`}
        />
      )}
      <div className="p-md">
        <h3 className="text-xl font-semibold mb-sm">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
