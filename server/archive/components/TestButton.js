import React from 'react'
import Button from '@material-ui/core/Button';

const TestButton = ({onClick, text}) => {

	return(
	  <Button variant="contained" color="primary" onClick={onClick}>
	      {text}
	  </Button>
	)
}

export default TestButton