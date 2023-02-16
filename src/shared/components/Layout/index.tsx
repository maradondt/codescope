import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};
