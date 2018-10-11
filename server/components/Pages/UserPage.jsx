import React from 'react'
import { connect } from 'react-redux'

class UserPage extends React.Component {

	constructor(props) {
	    super(props);
	}

	render() {
		return (
			<div> Test </div>
		)
	}
}


function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(UserPage);
