import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
import { THEME_VARIANTS, ThemeVariants, useThemeSelector } from './store';

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

export const ThemeSelector = memo(() => {
  const { changeHandler, theme } = useThemeSelector();

  return (
    <TextField size="small" id="theme" label="Theme" value={theme} onChange={changeHandler} select>
      {THEME_VARIANTS.map((value) => (
        <MenuItem key={value} value={value}>
          <Stack spacing={2} gap={2} direction="row">
            {iconMap[value]}
            {themeLabelMap[value]}
          </Stack>
        </MenuItem>
      ))}
    </TextField>
  );
});
