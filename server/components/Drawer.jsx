import React from 'react';
import { connect } from 'react-redux'
import { toggleDrawer } from "../src/actions";

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

import DrawerList from './DrawerList'


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


class DrawerMenu extends React.Component {

  constructor(props) {
      super(props);
      
  }

  render() {
    return (
      <Drawer
        variant="persistent"
        anchor='left'
        open={this.props.menuOpen}
      >
        <div style={drawerHeader}>
          <IconButton onClick={this.props.toggleDrawer}>
             <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div style={drawerContent}>
          <List>
            <DrawerList />
          </List>
        </div>
      </Drawer>

    )
  }
}

function mapStateToProps(state) {
  return {menuOpen: state.menuOpen}
}

export default connect(
  mapStateToProps,
  { toggleDrawer }
)(DrawerMenu);


