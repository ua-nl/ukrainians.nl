import { ReactNode } from "react";

export type TextProps = {
  children: ReactNode;
  className: string;

  // eslint-disable-next-line
  as: any;
};

export const Text = ({
  children,
  as: Component = "span",
  className,
}: TextProps) => <Component className={className}>{children}</Component>;
