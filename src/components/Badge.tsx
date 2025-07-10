import React from "react";

export default function ({
  children,
  variant,
  href,
}: {
  children: React.ReactNode;
  variant: "outline" | "secondary" | "primary";
  href?: string;
}) {
  let className = "";

  if (variant === "primary") {
    className = "px-3 py-1 bg-[darkGreen] text-[gold] rounded-full text-sm";
  } else if (variant === "outline") {
    className = "px-3 py-1 border-1 border-[green] rounded-full text-sm";
  } else {
    className =
      "px-3 py-1 border-1 border-[green] rounded-full text-sm bg-[background]/70";
  }

  if (href) {
    className += " cursor-pointer hover:bg-[green] transition-bg duration-300";
  }

  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}
