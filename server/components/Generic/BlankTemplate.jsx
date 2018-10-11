import React from 'react'
import { connect } from 'react-redux'

//import actions, Material UI components, etc...

class ComponentName extends React.Component {

	constructor(props) {
	    super(props);
	}

	//add additional methods here, bind in the constructor method

	render() {
		return (

			//JSX to be rendered goes here 
			
		)

	}
}


function mapStateToProps(state) {
	
	//map state variables to the component's state 
 	return {}
}


export default connect(
  mapStateToProps,
  {} //add importing action functions here
)(ComponentName);
