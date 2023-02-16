import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector, useThemeDetector } from 'shared/hooks';
import { darkTheme, lightTheme } from 'shared/theme';

export type ThemeVariants = 'light' | 'dark' | 'system';
type State = {
  theme: ThemeVariants;
};

export const THEME_VARIANTS: Array<ThemeVariants> = ['dark', 'light', 'system'];

const initialState: State = {
  theme: 'system',
};

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    setTheme: (state, { payload }: PayloadAction<ThemeVariants>) => {
      state.theme = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const { reducer: themeReducer } = themeSlice;

export const useThemeSelector = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.theme.theme);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme(e.target.value as ThemeVariants));
  };
  return { changeHandler, theme };
};

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
};

export const useCurrentTheme = () => {
  const selectedTheme = useAppSelector((s) => s.theme.theme);
  const systemTheme = useThemeDetector();
  const currentTheme = selectedTheme === 'system' ? systemTheme : selectedTheme;

  return themeMap[currentTheme];
};
