import { Box, BoxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

export const ImgBox: FC<{
  children: ReactNode;
  sx: BoxProps['sx'];
}> = (props) => (
  <Box overflow="hidden" lineHeight={0} borderRadius="12px" sx={props.sx}>
    {props.children}
  </Box>
);
