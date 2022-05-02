import { ReactNode, useMemo } from "react";
import { Button as AriaKitButton } from "ariakit";
import classNames from "classnames";

type Variants = "primary" | "secondary" | "accent" | "custom";

export type ButtonProps = {
  children: ReactNode;
  variant?: Variants;
  isBordered?: boolean;
  className?: string;
  borderColor?: `u-${string}`;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  isBordered,
  className,
  borderColor = "u-blue-500",
  disabled,
  onClick,
}: ButtonProps) => {
  const border = {
    border: isBordered,
    [`border-${borderColor}`]: isBordered,
  };

  const variantMapping: Record<Variants, string> = {
    primary: `bg-u-blue-500 text-white font-bold text-base rounded hover:bg-u-blue-700 disabled:bg-u-blue-200`,
    secondary: `bg-u-yellow-700 text-u-black-700 font-bold text-base rounded hover:bg-u-yellow-800 disabled:bg-u-blue-200`,
    accent: `bg-u-blue-500 text-white font-bold`,
    custom: "",
  };

  const classes = classNames(
    "py-3 px-4",
    className,
    border,
    variantMapping[variant]
  );

  return (
    <AriaKitButton className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </AriaKitButton>
  );
};
