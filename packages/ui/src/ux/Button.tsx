import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export type ButtonType = 'primary' | 'secondary' | 'accent' | 'outline';
export type ButtonProps = Pick<
  MuiButtonProps,
  'children' | 'disabled' | 'onClick'
> & {
  type?: ButtonType;
  size?: 'small' | 'medium';
};

const PropMap = {
  variant: {
    primary: 'contained',
    accent: 'contained',
    secondary: 'contained',
    outline: 'outlined',
  } as Record<ButtonType, MuiButtonProps['variant']>,
  color: {
    primary: 'primary',
    secondary: 'secondary',
    accent: 'accent',
    outline: 'primary',
  } as Record<ButtonType, MuiButtonProps['color']>,
};

export const Button: React.FC<ButtonProps> = ({ type, ...props }) => {
  const btnType = type ?? 'outline';
  return (
    <MuiButton
      {...props}
      variant={PropMap.variant[btnType]}
      color={PropMap.color[btnType]}
    />
  );
};