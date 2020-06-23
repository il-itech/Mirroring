import Router from 'next/router';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import NoSsr from '@material-ui/core/NoSsr';
import * as R from 'ramda';

import { serializeTable } from 'helpers/coronavirus';
import { getMuiTheme } from './theme';

const TABLE_HEADS_COMPANIES = [
  'Country name',
  'Code',
  'Total cases',
  'Total recovered',
  'Total unresolved',
  'Total deaths',
  'Total new cases today',
  'Total new deaths today',
  'Total active cases',
  'Total serious cases',
];

const options = {
  filterType: 'dropdown',
  rowsPerPageOptions: [10, 20, 30],
  onRowClick: (rowData) => {
    const code = R.nth(1, rowData);

    Router.push(
      '/country-coronavirus-stats/[code]',
      `/country-coronavirus-stats/${code}`,
    );
  },
};

export const CoronavirusAllCountryStatsTable = ({ tableData }) => (
  <NoSsr>
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        data={serializeTable(tableData)}
        columns={TABLE_HEADS_COMPANIES}
        options={options}
      />
    </MuiThemeProvider>
  </NoSsr>
);

CoronavirusAllCountryStatsTable.propTypes = {
  tableData: PropTypes.shape({}).isRequired,
};
