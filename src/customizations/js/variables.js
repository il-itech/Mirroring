/* eslint-disable import/no-webpack-loader-syntax */
import colors from '!!sass-variable-loader!../pre-customization/_colors.scss';
import custom from '!!sass-variable-loader!../pre-customization/_custom.scss';
import breakpoints from '!!sass-variable-loader!../grid-breakpoints.scss';

export default {
  colors,
  custom,
  breakpoints,
};
