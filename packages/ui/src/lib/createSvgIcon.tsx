import { SVGProps, FC, ReactNode, HTMLAttributes } from 'react';

export type SvgIconUA = ReturnType<typeof createSvgIconUA>;
export const createSvgIconUA =
  (
    content: ReactNode,
  ): FC<
    SVGProps<SVGSVGElement> & {
      size?: NonNullable<HTMLAttributes<HTMLSpanElement>['style']>['fontSize'];
    }
  > =>
  ({ size, ...props }) =>
    (
      <span style={{ fontSize: size, lineHeight: 0 }}>
        <svg
          width="1em"
          height="1em"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="8 8 72 72"
          {...props}
          style={{
            verticalAlign: 'middle',
            // border: '1px solid red',
          }}
        >
          {content}
        </svg>
      </span>
    );
