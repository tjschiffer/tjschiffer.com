import React from 'react'
import { connect } from 'react-redux'
import '../../assets/css/main.css'
import PropTypes from 'prop-types'
import { REGISTER_SECTION, UPDATE_CURRENT_SECTION } from '../redux/actionTypes'
import ReactDOM from 'react-dom'

class NavSection extends React.Component {
  constructor (props) {
    super(props)
    this.props.dispatch({ type: REGISTER_SECTION, sectionTitle: this.props.sectionTitle })
    this.updateNavElement = this.updateNavElement.bind(this)
  }

  updateNavElement () {
    const middleOfScreen = Math.floor(window.innerHeight / 2)
    const node = ReactDOM.findDOMNode(this)
    const boundingClientRect = node.getBoundingClientRect()
    const top = boundingClientRect.top
    const bottom = boundingClientRect.bottom

    // If the element is not within the middle of the page, don't update anything
    if (top > middleOfScreen || bottom < middleOfScreen) {
      return
    }

    if (this.props.scrollDirection === 'down') {
      if (top < middleOfScreen) {
        this.props.dispatch({ type: UPDATE_CURRENT_SECTION, currentSection: this.props.sectionTitle })
      }
    } else {
      if (bottom > middleOfScreen) {
        this.props.dispatch({ type: UPDATE_CURRENT_SECTION, currentSection: this.props.sectionTitle })
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    // If the scroll prop has changed, see if the nav element needs to be updated
    if (nextProps.scrollTop !== this.props.scrollTop) {
      this.updateNavElement()
    }
    if (nextProps.scrollToSection === this.props.sectionTitle && nextProps.scrollToSection !== this.props.scrollToSection) {
      // If the section to be scrolled to matches the title of this section
      const node = ReactDOM.findDOMNode(this)
      node.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  render () {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    )
  }
}

NavSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    scrollTop: state.navContentScroll.scrollTop,
    scrollDirection: state.navContentScroll.scrollDirection,
    scrollToSection: state.scrollToSection
  }
}

export default connect(mapStateToProps)(NavSection)
