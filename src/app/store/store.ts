import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { codeSearchModel } from 'features/codesearch';
import { themeReducer } from 'features/theme';
import { loadState, saveState } from 'shared/utils';

export const rootReducer = combineReducers({
  search: codeSearchModel.searchReducer,
  theme: themeReducer,
});

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (defaults) => defaults(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState({
    theme: store.getState().theme,
  });
});
