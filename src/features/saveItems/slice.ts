import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CodeItem } from 'api';
import { RootState } from 'app/store';
import { codeSearchModel } from 'features/codesearch';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

type State = {
  savedItems: Record<string, Record<string, CodeItem>>;
};

const initialState: State = {
  savedItems: {},
};

const saveItemsSlice = createSlice({
  initialState,
  name: 'saveItems',
  reducers: {
    addItem: (state, { payload: { item, language } }: PayloadAction<{ language: string; item: CodeItem }>) => {
      state.savedItems = {
        ...state.savedItems,
        [language]: {
          [item.html_url]: item,
          ...(state.savedItems[language] ?? {}),
        },
      };
    },
    removeItem: (state, { payload }: PayloadAction<string>) => {
      Object.values(state.savedItems).forEach((itemsByLang) => {
        if (payload in itemsByLang) {
          delete itemsByLang[payload];
        }
      });
    },

    resetState: () => initialState,
  },
});

export const { addItem, resetState, removeItem } = saveItemsSlice.actions;

export const { reducer: saveItemsReducer } = saveItemsSlice;

const getSelectItem = (url: string, lang: string) => (s: RootState) => {
  return s.saveItems.savedItems[lang]?.[url];
};
const selectLanguages = (s: RootState) => Object.keys(s.saveItems.savedItems);

const selectSavedItems = (s: RootState) => s.saveItems.savedItems;

export const useSaveButton = ({ url, lang }: { url: string; lang: string }) => {
  const dispatch = useAppDispatch();
  const savedItem = useAppSelector(getSelectItem(url, lang));
  const itemFromResult = useAppSelector(codeSearchModel.getSelectItem(url));
  const isSaved = !!savedItem;
  const saveHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isSaved) {
      dispatch(removeItem(url));
      return;
    }
    if (itemFromResult) {
      dispatch(addItem({ item: itemFromResult, language: lang }));
    }
  };

  return {
    isSaved,
    saveHandler,
  };
};

export const useSavedItems = () => {
  const languages = useAppSelector(selectLanguages);
  const items = useAppSelector(selectSavedItems);

  return { languages, items };
};
