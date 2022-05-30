import { Button as MuiButton, ButtonProps } from '@mui/material';

export type ButtonCustomProps = Pick<
  ButtonProps,
  'children' | 'disabled' | 'onClick'
>;

const createComponent =
  (color: 'primary' | 'secondary'): React.FC<ButtonCustomProps> =>
  (props) =>
    <MuiButton {...props} variant="contained" color={color} />;

export const Button = MuiButton;
export const ButtonSecondary = createComponent('secondary');
export const ButtonPrimary = createComponent('primary');
