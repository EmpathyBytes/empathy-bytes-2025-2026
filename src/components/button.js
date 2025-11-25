import React from "react";
import "../styles/components/button.css";

/**
 * Reusable Button component
 * - variant: "primary" | "secondary" | "outline"
 * - size:    "sm" | "md" | "lg"
 * - as:      element/component ("button" | "a" | Link)
 */
export default function Button({
  variant = "primary",
  size = "md",
  as: As = "button",
  className = "",
  children,
  type,
  ...rest
}) {
  const classes = [
    "eb-btn",
    `eb-btn--${variant}`,
    `eb-btn--${size}`,
    className,
  ].filter(Boolean).join(" ");

  // only default to "button" when rendering a <button> and no type was provided
  const resolvedType = As === "button" && !type ? "button" : type;

  return (
    <As className={classes} type={resolvedType} {...rest}>
      {children}
    </As>
  );
}