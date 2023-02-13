import { combineReducers } from '@reduxjs/toolkit';

import { searchReducer } from '../../features/codesearch';

export const rootReducer = combineReducers({
  search: searchReducer,
});
