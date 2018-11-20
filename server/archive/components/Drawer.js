import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import DrawerListCont from '../containers/DrawerListCont'


const drawerHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 8px',
  width: 240
}

const drawerContent= {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-mid',
  padding: '0 8px',
  width: 240
}


const PersistentDrawer = ({menuOpen, onClick}) => (
  <Drawer
    variant="persistent"
    anchor='left'
    open={menuOpen}
  >
    <div style={drawerHeader}>
      <IconButton onClick={onClick}>
         <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <div style={drawerContent}>
      <List>
        <DrawerListCont />
      </List>
    </div>
  </Drawer>
)

export default PersistentDrawer;