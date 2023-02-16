import { ApiError, apiClient } from 'api';
import { createAppAsyncThunk } from 'shared/hooks';

export const searchFn = createAppAsyncThunk('search/result', async (_, thunkApi) => {
  try {
    const { search, language } = thunkApi.getState().search;
    const resp = await apiClient.searchCode(search, language);

    return resp;
  } catch (e) {
    const message = (e as ApiError).message;
    return thunkApi.rejectWithValue(message);
  }
});
