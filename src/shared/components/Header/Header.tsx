import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import { FC, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeSelector } from 'features/theme';

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Link
          variant="body1"
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
            fontWeight: 600,
          }}
          component={RouterLink}
          to="/"
        >
          CodeScope
        </Link>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
        <ThemeSelector />
      </Toolbar>
    </AppBar>
  );
};
