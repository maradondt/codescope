import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, IconButton, Stack, TextField } from '@mui/material';
import { useSearchForm } from '../model';
import { LANGUAGES } from '../model';

export const SearchCodeInput = () => {
  const { onSearch, isBtnDisabled, languageValue, onChangeLanguage, onChangeSearch, searchValue } = useSearchForm();

  return (
    <Stack
      gap={1}
      sx={{
        w: '100%',
      }}
      component="form"
      onSubmit={onSearch}
      direction="row"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <TextField
        sx={{
          flexGrow: 1,
        }}
        onChange={onChangeSearch}
        value={searchValue}
        label="Code"
        size="small"
        placeholder="Paste your code"
        multiline
      />

      <Autocomplete<string, false, true>
        disablePortal
        disableClearable
        id="combo-box-demo"
        options={LANGUAGES}
        value={languageValue}
        onChange={onChangeLanguage}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} size="small" label="Extension" placeholder="js" />}
      />
      <IconButton disabled={isBtnDisabled} type="submit" color="primary">
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
