import { connect } from 'react-redux'
import MainContent from '../components/MainContent'

const mapStateToProps = state => {
    return {
      menuOpen: state.menuOpen,
      pageNum: state.activePage
    }
}

const ContentCont = connect(
  mapStateToProps,
)(MainContent)

export default ContentCont