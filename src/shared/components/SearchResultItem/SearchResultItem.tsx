import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { FC, ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { sliceString } from 'shared/utils';

type Props = {
  text_matches?: Array<{ fragment?: string }>;
  userAvatar?: string;
  userLogin?: string;
  repositoryName?: string;
  filePath?: string;
  href?: string;
  lang: string;
  action?: ReactNode;
};

export const SearchResultItem: FC<Props> = ({
  userAvatar,
  filePath: path,
  repositoryName,
  userLogin,
  text_matches,
  href,
  lang,
  action,
}) => {
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar src={userAvatar} />}
        titleTypographyProps={{
          component: Link,
          target: '_blank',
          href: href,
        }}
        subheaderTypographyProps={{
          component: Link,
          target: '_blank',
          href: href,
        }}
        sx={{ cursor: 'pointer', maxWidth: '100%' }}
        title={sliceString(`${userLogin}/${repositoryName}`, 40)}
        subheader={sliceString(path, 40)}
        action={action}
      />
      <Divider />

      <CardContent>
        {text_matches?.map(
          ({ fragment }, i) =>
            fragment && (
              <SyntaxHighlighter key={i} language={lang} style={a11yDark}>
                {fragment}
              </SyntaxHighlighter>
            )
        )}
      </CardContent>
    </Card>
  );
};
