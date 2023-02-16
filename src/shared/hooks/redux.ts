import { EqualityFn, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector = <RState = RootState, Selected = unknown>(
  selector: (s: RState) => Selected,
  equalityFn?: EqualityFn<Selected> | undefined
) => useSelector<RState, Selected>(selector, equalityFn);
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();
