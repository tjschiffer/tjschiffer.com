import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import '../../assets/css/main.css'
import { UPDATE_NAV_CONTENT_SCROLL } from '../redux/actionTypes'
import debounce from 'debounce'

/**
 * Wraps all the content sections and updates state on scroll.
 */
class NavContent extends React.Component {
  constructor (props) {
    super(props)
    this.navContentScroll = this.navContentScroll.bind(this)
    this.debouncedUpdateScrollParameters = debounce(this.updateScrollParameters.bind(this), 5)
  }

  navContentScroll () {
    const node = ReactDOM.findDOMNode(this)
    const newScrollTop = node.scrollTop
    this.debouncedUpdateScrollParameters(newScrollTop, newScrollTop < this.props.scrollTop ? 'up' : 'down')
  }

  updateScrollParameters (newScrollTop, direction) {
    this.props.dispatch({ type: UPDATE_NAV_CONTENT_SCROLL, scrollTop: newScrollTop, scrollDirection: direction })
  }

  render () {
    return (
      <div onScroll={this.navContentScroll} className={this.props.className}>{this.props.children}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    scrollTop: state.navContentScroll.scrollTop
  }
}

export default connect(mapStateToProps)(NavContent)
