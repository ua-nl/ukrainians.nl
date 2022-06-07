import type { ReactNode } from 'react';

import { Box, BoxProps } from '@mui/material';

export interface ImgBoxProps {
  children: ReactNode;
  sx: BoxProps['sx'];
}
export const ImgBox = (props: ImgBoxProps) => (
  <Box overflow="hidden" lineHeight={0} borderRadius="12px" sx={props.sx}>
    {props.children}
  </Box>
);
