import React from 'react';
import { connect } from 'react-redux'
import { openPage } from "../src/actions";

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import BuildIcon from '@material-ui/icons/Build';
import MoviesIcon from '@material-ui/icons/Movie';

const ListStyles = {
    width: 230,
    maxWidth: 360,
}

class DrawerList extends React.Component {

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(pageNum) {
    this.props.openPage(pageNum);
  }

  render() {
    return (
      <div style={ListStyles}>
        <List component="nav">
          <ListItem button onClick={this.handleChange(1)}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Setup" />
          </ListItem>
          <ListItem button onClick={this.handleChange(2)}>
            <ListItemIcon>
              <MoviesIcon />
            </ListItemIcon>
            <ListItemText primary="Game" />
          </ListItem>
        </List>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps,
  { openPage }
)(DrawerList);




