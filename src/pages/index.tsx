import { Route, Routes } from 'react-router-dom';
import { MainPage } from './main';

const NoMatch = () => <div>no match</div>;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="search" element={<div>search</div>} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
