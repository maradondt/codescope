import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const withStore = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </Provider>
  );
