import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const HeaderLogo = () => (
  <Typography
    variant="h6"
    noWrap
    component={Link}
    to="/"
    sx={{
      mr: 2,
      fontWeight: 700,
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    CodeScope
  </Typography>
);
