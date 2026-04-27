import React from "react";
import "../styles/components/button.css";
/**
 * A button component that supports various visual styles, sizes, and HTML element types.
 * * @component
 * @param {Object} props - The component props.
 * @param {('primary'|'secondary'|'outline'|'ghost')} [props.variant='primary'] - The visual style of the button.
 * @param {('sm'|'md'|'lg')} [props.size='md'] - The padding and font size of the button.
 * @param {React.ElementType} [props.as='button'] - The HTML element or React component to render as (e.g., 'a', 'button', Link).
 * @param {string} [props.className=''] - Additional custom CSS classes to apply to the button.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button (text, icons, etc.).
 * @param {string} [props.type] - The HTML 'type' attribute (e.g., 'submit', 'reset'). Defaults to 'button' only if 'as' is a button.
 * @param {Object} [props...rest] - Any other valid HTML attributes (e.g., onClick, href, disabled) passed to the underlying element.
 * * @returns {JSX.Element} The rendered polymorphic button.
 * * @example
 * // Render as a standard submit button
 * <Button variant="primary" type="submit">Submit</Button>
 * * @example
 * // Render as an anchor link with custom href
 * <Button as="a" href="https://gatech.edu" variant="outline">Visit Site</Button>
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