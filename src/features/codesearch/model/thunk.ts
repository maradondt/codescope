import { ApiError, apiClient } from 'api';
import { createAppAsyncThunk } from 'shared/hooks';

export const abortSearchRequest = () => {
  apiClient.abortRequest(apiClient.searchCode);
};

export const searchFn = createAppAsyncThunk('search/result', async (_, thunkApi) => {
  try {
    const { search, language, loading } = thunkApi.getState().search;
    if (loading) {
      abortSearchRequest();
    }
    const resp = await apiClient.searchCode(search, language);

    return resp;
  } catch (e) {
    const message = (e as ApiError).message;
    return thunkApi.rejectWithValue(message);
  }
});
