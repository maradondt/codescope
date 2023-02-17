import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { SearchResultItem } from 'shared/components';
import { useSavedItems } from './slice';
import { SaveButton } from './SaveButton';

export const SavedItemsList = () => {
  const { items, languages } = useSavedItems();
  return (
    <>
      {languages.map((lang, i) => (
        <Box key={lang}>
          {!!i && <Divider sx={{ mt: 4 }} />}
          <Typography sx={{ mb: 2 }} variant="h6" color="Highlight">
            {lang}
          </Typography>
          <Grid alignItems="stretch" container spacing={2}>
            {Object.values(items[lang]).map((item) => (
              <Grid key={item.html_url} item xs={12} md={6}>
                <SearchResultItem
                  lang={lang}
                  repositoryName={item.repository.name}
                  userAvatar={item.repository.owner.avatar_url}
                  filePath={item.path}
                  text_matches={item.text_matches}
                  href={item.html_url}
                  userLogin={item.repository.owner.login}
                  action={<SaveButton lang={lang} url={item.html_url} />}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};
