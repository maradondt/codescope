import { SearchResult } from 'features/codesearch';
import { memo } from 'react';
import { Layout } from 'shared/components';

export const SearchPage = memo(() => {
  return (
    <Layout>
      <SearchResult />
    </Layout>
  );
});
