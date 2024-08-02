// src/components/CardList.tsx
import React from "react";

interface CardListProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  layout?: "horizontal" | "vertical" | "grid";
  gap?: string;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  itemWidth?: string;
  itemClassName?: string;
}

const CardList: React.FC<CardListProps> = ({
  children,
  className = "",
  containerClassName = "",
  layout = "horizontal",
  gap = "",
  columns = { sm: 1, md: 2, lg: 3 },
  itemWidth = "",
  itemClassName = "",
}) => {
  const getLayoutClasses = () => {
    switch (layout) {
      case "horizontal":
        return "flex flex-nowrap overflow-x-auto";
      case "vertical":
        return "flex flex-col";
      case "grid":
        return `grid grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg}`;
      default:
        return "";
    }
  };

  const listClasses = [getLayoutClasses(), gap, "w-full", className]
    .filter(Boolean)
    .join(" ");

  const getItemClasses = () => {
    const classes = [itemClassName];
    if (layout === "horizontal" && itemWidth) {
      classes.push(`w-${itemWidth}`, "flex-shrink-0");
    } else {
      classes.push("w-full");
    }
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className={containerClassName}>
      <div className={listClasses}>
        {React.Children.map(children, (child) => (
          <div className={getItemClasses()}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
