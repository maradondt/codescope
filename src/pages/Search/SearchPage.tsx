import { Container } from '@mui/system';
import { Header, Layout } from 'shared/components';
import { SearchResult } from 'features/codesearch';
import { memo } from 'react';

export const SearchPage = memo(() => {
  return (
    <Layout>
      <Header />
      <Container
        sx={{
          paddingTop: 1,
          marginTop: 1,
          backgroundColor: 'background.default',
        }}
        maxWidth="md"
      >
        <SearchResult />
      </Container>
    </Layout>
  );
});
