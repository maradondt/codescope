import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Main';
import { SearchPage } from './Search/SearchPage';
import { styled } from '@mui/material';

const NoMatch = () => <div>no match</div>;

const StyledBackground = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  minHeight: '100vh',
}));

export const AppRoutes = () => {
  return (
    <StyledBackground>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </StyledBackground>
  );
};
