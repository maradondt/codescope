import { Box, CircularProgress } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
  isLoading?: boolean;
}>;

export const ContentLoader: FC<Props> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  return <>{children}</>;
};
