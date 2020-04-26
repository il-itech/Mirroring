import { createMuiTheme } from '@material-ui/core/styles';

const breakpoints = {
  xs: 0,
  sm: 720,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const colors = {
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
  maire: '#1d1d1b',
  swansDown: '#d4f0dc',
  jaggedIce: '#c7ede5',
  light: '#eff0f2',
  halfBaked: '#5c9090',
  jellyBean: '#437b89',
  tranquil: '#d9f6f0',
  pattensBlue: '#d7f3fc',
  dark: '#1d1d1d',
  astral: '#367180',
  cinnabar: '#ea371f',
  purple: '#5c7190',
  skyBlue: '#50abf1',
  ghostWhite: '#dedede',
  gray: '#b1b3b6',
  royalBlue: '#345c97',
  albescentWhite: '#f7e5de',
  brown: '#905c5c',
  concrete: '#f2f2f2',
  panache: '#f0f3f8',
  ironside: '#6b6a68',
  spindle: '#b2ccdc',
  grannyApple: '#dcf8e4',
  vulcan: '#383a44',
  blackOfPearl: '#1c2025',
  ebony: '#282c34',
  mischka: '#adb0bb',
  blue: '#8a85ff',
};

const theme = createMuiTheme({
  breakpoints: {
    keys: [breakpoints.xs, breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl],
    values: breakpoints,
  },
  palette: {
    colors,
    background: {
      default: colors.blackOfPearl,
    },
  },
});

export default theme;
