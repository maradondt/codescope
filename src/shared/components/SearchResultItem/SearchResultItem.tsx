import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  text_matches?: Array<{ fragment?: string }>;
  userAvatar?: string;
  userLogin?: string;
  repositoryName?: string;
  filePath?: string;
  href?: string;
  lang: string;
};

export const SearchResultItem: FC<Props> = ({
  userAvatar,
  filePath: path,
  repositoryName,
  userLogin,
  text_matches,
  href,
  lang,
}) => {
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar src={userAvatar} />}
        component={Link}
        target="_blank"
        href={href}
        onClick={console.log}
        sx={{ cursor: 'pointer' }}
        subheader={path}
        title={`${userLogin}/${repositoryName}`}
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
