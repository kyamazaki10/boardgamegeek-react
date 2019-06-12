import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    console.log('search');
  }

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

            <div className="search">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <InputBase
                onKeyPress={this.handleKeyPress}
                placeholder="Search..."
                inputProps={{'aria-label': 'Search'}}
                className="search-input" />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
