import { Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material';
import { lazy } from 'react';

const NoMatch = () => <div>no match</div>;

const MainPage = lazy(() => import('./Main'));
const SearchPage = lazy(() => import('./Search'));
const SavedItemsPage = lazy(() => import('./SavedItems'));

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
          <Route path="saved" element={<SavedItemsPage />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </StyledBackground>
  );
};
