import { Components } from '@mui/material';

export const TypographyStyle = (): Partial<Components> => {
  return {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },
  };
};
