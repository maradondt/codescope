import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
import { THEME_VARIANTS, ThemeVariants, useThemeSelector } from './store';
import { styled } from '@mui/material';

const iconMap: Record<ThemeVariants, React.ReactNode> = {
  dark: <DarkModeIcon />,
  light: <LightModeIcon />,
  system: <SettingsBrightnessIcon />,
};
const themeLabelMap: Record<ThemeVariants, string> = {
  dark: 'Dark',
  light: 'Light',
  system: 'System default',
};

const SyledSelect = styled(TextField)(() => ({
  '& label.Mui-focused, & label,& .item-value, & .MuiSvgIcon-root': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
}));
export const ThemeSelector = memo(() => {
  const { changeHandler, theme } = useThemeSelector();

  return (
    <SyledSelect
      inputProps={{
        style: {
          color: 'white',
        },
      }}
      size="small"
      id="theme"
      label="Theme"
      value={theme}
      onChange={changeHandler}
      select
    >
      {THEME_VARIANTS.map((value) => (
        <MenuItem key={value} value={value}>
          <Stack className="item-value" spacing={2} gap={2} direction="row">
            {iconMap[value]}
            {themeLabelMap[value]}
          </Stack>
        </MenuItem>
      ))}
    </SyledSelect>
  );
});
