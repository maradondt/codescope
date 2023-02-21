import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SearchCodeInput } from 'features/codesearch';
import { useAppTheme } from 'features/theme';

const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  '.highlight': {
    color: theme.palette.primary.main,
  },
}));
export const MainPage = () => {
  const { theme } = useAppTheme();

  return (
    <Box
      display="flex"
      height="100vh"
      bgcolor={theme.palette.background.default}
      width="100%"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack
        sx={{
          maxWidth: { xs: 300, md: 500 },
        }}
        spacing={2}
      >
        <Stack>
          <Logo
            sx={{
              fontWeight: 600,
              fontSize: { xs: '3rem', md: '5rem' },
            }}
            variant="h1"
          >
            Code<span className="highlight">Scope</span>
          </Logo>
          <Typography
            sx={{
              fontWeight: 300,
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.5rem' },
            }}
            variant="caption"
          >
            CodeScope is a powerful search tool that allows you to quickly and easily find code examples on GitHub
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.5rem' },
            }}
            align="center"
            variant="subtitle1"
          >
            Discover Code Faster
          </Typography>
        </Stack>
        <Box pb={6}>
          <SearchCodeInput />
        </Box>
        <div>
          <Typography
            sx={{
              color: 'text.primary',
            }}
            variant="body1"
          >
            Simply enter your search term and let CodeScope do the rest
          </Typography>
          <Typography
            sx={{
              color: 'text.primary',
            }}
            variant="caption"
          >
            With CodeScope you can discover new code and accelerate your development process
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};
