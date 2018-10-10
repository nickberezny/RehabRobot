import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const menuIconStyle = {
  marginLeft: 6,
  marginRight: 20,
}

const appbarStyle = {
  display: 'flex',
  flexGrow: 1
}


const Topbar = ({onClick}) => (
  <AppBar position="fixed" style={appbarStyle}>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" style={menuIconStyle} onClick={onClick}>
            <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
              Rehabilitation Robot
        </Typography>
      </Toolbar>
  </AppBar>
)

export default Topbar