import { Components, Theme } from '@mui/material';

export const InputStyles = (theme: Theme): Partial<Components> => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: 0,
          fontSize: theme.typography.caption.fontSize,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          fontSize: theme.typography.caption.fontSize,
          fontWeight: 500,
          marginBottom: theme.spacing(0.5),
          color: theme.palette.text.secondary,
          transform: 'scale(1)',
        },
        outlined: {
          display: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.grey?.[700]}`,
          padding: 0,
          '&:hover': {
            border: `1px solid ${theme.palette.primary.light}`,
          },
          '&.Mui-focused': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
        input: {
          padding: theme.spacing(3, 4),
          fontSize: '12px',
        },
        notchedOutline: {
          border: 'none',
          top: 0,
        },
      },
    },
  };
};
