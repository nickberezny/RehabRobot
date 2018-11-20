import { connect } from 'react-redux'
import {changeText} from "../src/actions";
import TestButton from '../components/TestButton'

const mapStateToProps = state => {
  return {
    text: state.text,
    socket: state.socket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick:id => {
      dispatch(changeText('Clicked!!'))
  }
}

const ButtonCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestButton)

export default ButtonCont