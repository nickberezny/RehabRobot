import React from 'react';
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


const DrawerList = ({onClick}) => (
  <div style={ListStyles}>
      <List component="nav">
        <ListItem button onClick={onClick.bind(this,1)}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Setup" />
        </ListItem>
        <ListItem button onClick={onClick.bind(this,2)}>
          <ListItemIcon>
            <MoviesIcon />
          </ListItemIcon>
          <ListItemText primary="Game" />
        </ListItem>
      </List>
      
    </div>
)


export default DrawerList;