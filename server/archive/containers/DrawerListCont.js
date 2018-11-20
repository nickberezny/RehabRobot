import { connect } from 'react-redux'
import {openPage} from "../src/actions";
import DrawerList from '../components/DrawerList'

const mapStateToProps = state => {
  return {
    pageNum: state.activePage
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: (id) => dispatch(openPage(id))
  }
}

const DrawerListCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerList)

export default DrawerListCont