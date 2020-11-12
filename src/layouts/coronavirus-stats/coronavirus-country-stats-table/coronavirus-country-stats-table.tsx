import { FC } from 'react';
import Router from 'next/router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables';
import * as R from 'ramda';

import { serializeTable } from 'helpers/coronavirus';
import { getMuiTheme } from './theme';
import { Props } from './types';

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

const options: MUIDataTableOptions = {
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

export const CoronavirusCountryStatsTable: FC<Props> = ({ tableData }) => {
  const serializedTable = serializeTable(tableData);

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        data={serializedTable}
        columns={TABLE_HEADS_COMPANIES}
        options={options}
        title=""
      />
    </MuiThemeProvider>
  );
};
