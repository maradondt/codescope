import { FC, PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header } from '../Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container
        sx={{
          paddingTop: 1,
          marginTop: 1,
          backgroundColor: 'background.default',
        }}
        maxWidth="md"
        component="main"
      >
        {children}
      </Container>
    </Box>
  );
};
