import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[300]
    },
    secondary: {
      main: green[300],
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  overrides: {
    MuiTableCell: {
      head: {
        color: grey[400],
        backgroundColor: grey[900]
      }
    },
    MuiTableSortLabel: {
      root: {
        '&:hover': {
          color: grey[50]
        },
        '&$active': {
          color: grey[200],
          '&& $icon': {
            color: grey[200]
          }
        }
      }
    }
  }
});
