import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[800]
    },
    secondary: {
      main: yellow[500]
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  overrides: {
    MuiTableCell: {
      head: {
        color: deepOrange[500],
        backgroundColor: deepOrange[100]
      }
    },
    MuiTableSortLabel: {
      root: {
        '&:hover': {
          color: deepOrange[900],
          '&& $icon': {
            color: deepOrange[900],
            opacity: 1
          }
        },
        '&$active': {
          color: deepOrange[900],
          '&& $icon': {
            color: deepOrange[900],
            opacity: 1
          }
        },
        '&& $icon': {
          color: deepOrange[500],
          opacity: 1
        }
      }
    }
  }
});
