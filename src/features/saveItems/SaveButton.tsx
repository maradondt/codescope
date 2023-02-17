import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSaveButton } from './slice';
import { FC } from 'react';
import { colors } from '@mui/material';

type Props = { url: string; lang: string };

export const SaveButton: FC<Props> = ({ url, lang }) => {
  const { isSaved, saveHandler } = useSaveButton({ url, lang });
  return (
    <IconButton onClick={saveHandler}>
      <FavoriteIcon htmlColor={isSaved ? colors.red[600] : colors.blueGrey[200]} />
    </IconButton>
  );
};
