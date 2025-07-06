import React from "react";

export default function ({
  children,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  variant: "outline" | "secondary" | "primary";
  onClick?: () => void;
}) {
  const Tag = onClick ? "button" : "div";

  let className = "";

  if (variant === "primary") {
    className = "px-3 py-1 bg-[darkGreen] text-[gold] rounded-full text-sm";
  }

  return (
    <Tag {...(onClick ? { onClick } : {})} className={className}>
      {children}
    </Tag>
  );
}
