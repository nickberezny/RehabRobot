import { connect } from 'react-redux'
import {toggleDrawer} from "../src/actions";
import PersistentDrawer from '../components/Drawer'

const mapStateToProps = state => {
  return {
    menuOpen: state.menuOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick:id => {
      dispatch(toggleDrawer())
    }
  }
}

const DrawerCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersistentDrawer)

export default DrawerCont

