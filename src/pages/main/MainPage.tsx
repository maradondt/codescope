import { Box, Stack, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { SearchCodeInput } from 'features/codesearch';

export const MainPage = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      bgcolor={blueGrey[50]}
      width="100%"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack spacing={2}>
        <Stack>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '3rem',
            }}
            variant="h1"
          >
            CodeScope
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '1rem',
              color: 'text.secondary',
            }}
            variant="subtitle2"
          >
            Discover Code Faster
          </Typography>
        </Stack>
        <SearchCodeInput />

        {/* <Typography
          sx={{
            maxWidth: '50%',
          }}
          variant="body2"
        >
          CodeScope is a powerful search tool that allows you to quickly and easily find code examples on GitHub. Simply
          enter your search term and let CodeScope do the rest. With CodeScope, you can discover new code and accelerate
          your development process.
        </Typography> */}
      </Stack>
    </Box>
  );
};
