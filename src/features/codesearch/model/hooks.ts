import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { changeLanguage, changeSearch, resetState } from './store';
import { abortSearchRequest, searchFn } from './thunk';

export const useSearchForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchValue = useAppSelector((s) => s.search.search);
  const languageValue = useAppSelector((s) => s.search.language);
  const error = useAppSelector((s) => s.search.error);
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };

  const onChangeLanguage = (e: React.SyntheticEvent, value: string | null) => {
    value && dispatch(changeLanguage(value));
  };

  const onSearch: React.FormEventHandler = (e) => {
    e.preventDefault();

    navigate({
      pathname: '/search',
      search: new URLSearchParams({ query: searchValue, language: languageValue }).toString(),
    });

    if (!!error) {
      // in case when we already on current page and got an error
      dispatch(searchFn());
    }
  };

  const isBtnDisabled = !searchValue || !languageValue;

  return {
    searchValue,
    onChangeSearch,
    onSearch,
    onChangeLanguage,
    languageValue,
    isBtnDisabled,
  };
};

export const useSearchResult = () => {
  const dispatch = useAppDispatch();
  const result = useAppSelector((s) => s.search.result);
  const isLoading = useAppSelector((s) => s.search.loading);
  const error = useAppSelector((s) => s.search.error);
  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search).get('query'), [location.search]);
  const language = useMemo(() => new URLSearchParams(location.search).get('language'), [location.search]);

  const isEmptyRequest = !query || !language;
  const isEmptyResult = !isEmptyRequest && !result?.total_count && !error && !isLoading;

  useEffect(() => {
    if (query) {
      dispatch(changeSearch(query));
    }
    if (language) {
      dispatch(changeLanguage(language));
    }
  }, [dispatch, language, query]);

  useEffect(() => {
    if (query && language) {
      dispatch(searchFn());
    }
    return abortSearchRequest;
  }, [dispatch, query, language]);

  useEffect(
    () => () => {
      dispatch(resetState());
    },
    [dispatch]
  );

  const repeatSearch = () => {
    dispatch(searchFn());
  };

  return { result, isLoading, error, repeatSearch, isEmptyResult, isEmptyRequest, language };
};
