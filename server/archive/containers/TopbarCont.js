import { connect } from 'react-redux'
import {toggleDrawer} from "../src/actions";
import Topbar from "../components/Topbar"


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick:id => {
      dispatch(toggleDrawer())
    }
  }
}

const TopbarCont = connect(
mapStateToProps,
  mapDispatchToProps
)(Topbar)

export default TopbarCont