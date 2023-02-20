import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

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
      direction={{ xs: 'column', md: 'row' }}
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
        sx={{ minWidth: 200, flexGrow: 1 }}
        renderInput={(params) => <TextField {...params} size="small" label="Extension" placeholder="js" />}
      />
      <Box display="flex" justifyContent={'center'}>
        <IconButton sx={{ flexGrow: 0 }} disabled={isBtnDisabled} type="submit" color="primary">
          <SearchIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};
