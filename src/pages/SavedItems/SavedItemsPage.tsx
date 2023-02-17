import { SavedItemsList } from 'features/saveItems';
import { Layout } from 'shared/components';
import Typography from '@mui/material/Typography';

export const SavedItemsPage = () => {
  return (
    <Layout>
      <Typography variant="h4" component="h1" color="GrayText">
        Saved Items
      </Typography>
      <SavedItemsList />
    </Layout>
  );
};
