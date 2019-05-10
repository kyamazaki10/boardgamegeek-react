import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <IconButton aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
