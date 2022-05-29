import * as m from '@mui/material';

export const Button = m.Button;

export type ButtonCustomProps = Pick<m.ButtonProps, 'children' | 'disabled' | 'onClick'>

export const ButtonSecondary: React.FC<{
  children: React.ReactNode;
}> = ({ children, ...props }: ButtonCustomProps) => (
  <m.Button {...props} variant="contained" color="secondary">
    {children}
  </m.Button>
);

export const ButtonPrimary: React.FC<{
  children: React.ReactNode;
}> = ({ children, ...props }: ButtonCustomProps) => (
  <m.Button {...props} variant="contained" color="primary">
    {children}
  </m.Button>
);
