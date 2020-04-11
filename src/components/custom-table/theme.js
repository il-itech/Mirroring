import { createMuiTheme } from '@material-ui/core/styles';

import scssVariables from '../../customizations/js/variables';

const {
  colors: {
    white,
    ebony,
  },
} = scssVariables;

export const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: ebony,
          color: white,
        },
      },
      MUIDataTable: {
        root: {
          backgroundColor: ebony,
        },
      },
      MUIDataTableSelectCell: {
        headerCell: {
          backgroundColor: ebony,
        },
        fixedHeaderCommon: {
          backgroundColor: ebony,
        },
      },
      MuiCheckbox: {
        root: {
          display: 'none',
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: '1px solid rgba(81, 81, 81, 1)',
        },
        head: {
          color: white,
        },
        body: {
          color: white,
        },
        paddingCheckbox: {
          display: 'none',
        },
      },
      MUIDataTableCell: {
        root: {
          backgroundColor: ebony,
        },
      },
      MUIDataTableHeadCell: {
        fixedHeaderCommon: {
          backgroundColor: ebony,
        },
        sortActive: {
          color: white,
        },
        sortLabelRoot: {
          display: 'block',
        },
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: ebony,
        },
      },
      MuiTablePagination: {
        root: {
          color: white,
        },
      },
      MuiSvgIcon: {
        root: {
          fill: '#adb0bb',
        },
      },
    },
  });
