import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export type ButtonType = 'primary' | 'secondary' | 'accent' | 'outline';
export interface ButtonProps
  extends Pick<MuiButtonProps, 'children' | 'disabled' | 'onClick'> {
  type?: ButtonType;
  size?: 'small' | 'medium';
}

const PROP_MAP_VARIANT: Record<ButtonType, MuiButtonProps['variant']> = {
  primary: 'contained',
  accent: 'contained',
  secondary: 'contained',
  outline: 'outlined',
};
const PROP_MAP_COLOR: Record<ButtonType, MuiButtonProps['color']> = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
  outline: 'primary',
};
export const Button = ({ type, ...props }: ButtonProps) => {
  const btnType = type ?? 'outline';
  return (
    <MuiButton
      {...props}
      variant={PROP_MAP_VARIANT[btnType]}
      color={PROP_MAP_COLOR[btnType]}
    />
  );
};
