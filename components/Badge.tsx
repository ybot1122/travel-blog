import React from "react";

export default function ({
  children,
  className,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  className: string;
  variant: "outline" | "secondary";
  onClick?: () => void;
}) {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag {...(onClick ? { onClick } : {})} className={className}>
      {children}
    </Tag>
  );
}
