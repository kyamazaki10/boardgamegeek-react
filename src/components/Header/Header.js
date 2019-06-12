import React from 'react';
import Search from './Search.js';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar className="header-content">
            <IconButton aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              Title
            </Typography>
            <Search />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
