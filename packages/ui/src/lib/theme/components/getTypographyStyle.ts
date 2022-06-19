import { Components } from '@mui/material';

export const getTypographyStyle = (): Pick<Components, 'MuiTypography'> => ({
  MuiTypography: {
    defaultProps: {
      gutterBottom: true,
    },
  },
});
