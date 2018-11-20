import React from 'react'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { toggleDrawer } from "../src/actions";



class Topbar extends React.Component {

  constructor(props) {
      super(props);
      this.state = { 
          menuIconStyle: {marginLeft: 6, marginRight: 20},
          appbarStyle: {display: 'flex', flexGrow: 1} 
        };
  }


  render() {
    return (

      <AppBar position="fixed" style={this.state.appbarStyle}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" style={this.state.menuIconStyle} onClick={this.props.toggleDrawer}>
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
                  {this.props.title}
            </Typography>
          </Toolbar>
      </AppBar>
    )

  }
}


function mapStateToProps(state) {
  
  //map state variables to the component's state 
  return {}
}


export default connect(
  mapStateToProps,
  {toggleDrawer} //add importing action functions here
)(Topbar);


