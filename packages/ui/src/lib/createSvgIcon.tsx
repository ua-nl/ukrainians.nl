import { SVGProps, FC, ReactNode } from 'react';

export const createSvgIconUA =
  (content: ReactNode): FC<SVGProps<SVGSVGElement>> =>
  (props) =>
    (
      <svg
        width="1em"
        height="1em"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="10 10 72 72"
        {...props}
        style={{ verticalAlign: 'middle' }}
      >
        {content}
      </svg>
    );
