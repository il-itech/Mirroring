import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import NoSsr from '@material-ui/core/NoSsr';
import * as R from 'ramda';

import { getMuiTheme } from './theme';

const options = {
  filterType: 'dropdown',
  rowsPerPageOptions: [10, 20, 30],
};

const TABLE_HEADS_COMPANIES = [
  'Country name',
  'Total cases',
  'Total recovered',
  'Total unresolved',
  'Total deaths',
  'Total new cases today',
  'Total new deaths today',
  'Total active cases',
  'Total serious cases',
];

export const serializeTable = R.compose(
  R.dropLast(1),
  R.map(R.values),
  R.map(R.omit(['ourid', 'source', 'code'])),
  R.values,
);

export const CustomTable = ({ tableData }) => (
  <NoSsr>
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        data={serializeTable(tableData)}
        columns={TABLE_HEADS_COMPANIES}
        options={options}
        className="mt-3"
      />
    </MuiThemeProvider>
  </NoSsr>
);

CustomTable.propTypes = {
  tableData: PropTypes.shape({}).isRequired,
};
