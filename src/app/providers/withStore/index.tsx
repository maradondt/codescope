import { configureStore } from '@reduxjs/toolkit';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../shared';
// import { store } from '../../../shared';

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const withStore = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </Provider>
  );
