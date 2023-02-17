import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ContentLoader, SearchResultItem } from 'shared/components';
import { useSearchResult } from '../model';

import Grid from '@mui/material/Grid';
import { SaveButton } from 'features/saveItems';
import { SearchCodeInput } from './SearchCodeInput';

export const SearchResult = () => {
  const { error, isLoading, result, isEmptyRequest, isEmptyResult, language } = useSearchResult();

  return (
    <ContentLoader isLoading={isLoading}>
      {error && <Alert severity="error">{error}</Alert>}
      {isEmptyResult && <Alert severity="info">No results found. Try again.</Alert>}
      {isEmptyRequest && <Alert severity="info">Please fill the fiellds below</Alert>}
      <Box mt={2} mb={2}>
        <SearchCodeInput />
      </Box>
      <Grid alignItems="stretch" container spacing={2}>
        {result?.items.map((item) => (
          <Grid key={item.html_url} item xs={12} md={6}>
            <SearchResultItem
              lang={language}
              repositoryName={item.repository.name}
              userAvatar={item.repository.owner.avatar_url}
              filePath={item.path}
              text_matches={item.text_matches}
              href={item.html_url}
              userLogin={item.repository.owner.login}
              action={<SaveButton lang={language} url={item.html_url} />}
            />
          </Grid>
        ))}
      </Grid>
    </ContentLoader>
  );
};
