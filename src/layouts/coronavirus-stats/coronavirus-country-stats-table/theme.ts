import { createMuiTheme, Theme } from '@material-ui/core/styles';

import scssVariables from 'customizations/js/variables';

const {
  colors: {
    white,
    ebony,
    mischka,
  },
} = scssVariables;

export const getMuiTheme = (): Theme =>
  createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: ebony,
          color: white,
        },
      },
      MuiTable: {
        root: {
          backgroundColor: ebony,
        },
      },
      MuiTableRow: {
        root: {
          cursor: 'pointer',
        },
      },
      // @ts-ignore
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
          height: 'auto !important',
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
      MUIDataTableViewCol: {
        title: {
          color: mischka,
        },
        label: {
          color: white,
        },
      },
      MUIDataTableFilter: {
        root: {
          backgroundColor: ebony,
        },
        title: {
          color: white,
        },
      },
      MuiInputBase: {
        fullWidth: {
          color: white,
        },
      },
      MuiFormLabel: {
        root: {
          color: mischka,
        },
      },
      MuiSvgIcon: {
        root: {
          fill: mischka,
        },
      },
      MuiIconButton: {
        root: {
          color: mischka,
        },
      },
    },
  });
