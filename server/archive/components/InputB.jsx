import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { connect } from "react-redux";
import { setDamping} from "../src/actions";

class InputB extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { param: this.props.param };
  }

  handleChange = name => event => {
    this.props.setDamping(event.target.value);
    this.setState({ param: event.target.value});
  };


  render() {

    return (
      <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="B Parameter"
          value={this.state.param}
          onChange={this.handleChange('name')}
          margin="normal"
        />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { param: state.bParam }
}

export default connect(
  mapStateToProps,
  { setDamping }
)(InputB);
