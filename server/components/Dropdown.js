import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import { connect } from "react-redux";
import { selectController } from "../src/actions";

class Dropdown extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { controller: this.props.controller };
  }

  handleChangeController = name => event => {
    this.setState({ controller: event.target.value });
    this.props.selectController(event.target.value);
  };


  render() {
    return (
          <div>
            <FormControl>
              <InputLabel htmlFor="age-native-simple">Controller Type</InputLabel>
              <Select
                native
                value={this.state.controller}
                onChange={this.handleChangeController()}
                inputProps={{
                  id: 'age-native-simple',
                    }}
                  >
                <option value={1}>Free Motion</option>
                <option value={2}>Resistive</option>
                <option value={3}>Asistive</option>
              </Select>
            </FormControl>
          </div> 
    );
  }
}

function mapStateToProps(state) {
  return { controller: state.controller }
}

export default connect(
  mapStateToProps,
  { selectController }
)(Dropdown);
