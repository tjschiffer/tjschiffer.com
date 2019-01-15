import React from 'react'
import { connect } from 'react-redux'
import '../../assets/css/main.css'
import { SCROLL_TO_SECTION } from '../redux/actionTypes'

/**
 * Generates the navigation labels on desktop.
 */
class NavLabels extends React.Component {
  render () {
    const navLabels = this.props.navLabels.map(sectionTitle => {
      const isActive = this.props.currentSection === sectionTitle
      return (
        <a
          className={`display-block cursor-pointer padding-vert-0-5em ${!isActive ? 'opacity-4' : ''}`}
          onClick={() => this.props.scrollToSection(sectionTitle)}
          key={sectionTitle}
        >
          {sectionTitle}
        </a>
      )
    })

    return (
      <div>
        {navLabels}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navLabels: state.sections,
    currentSection: state.currentSection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    scrollToSection: (sectionTitle) => {
      dispatch({ type: SCROLL_TO_SECTION, scrollToSection: sectionTitle })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLabels)
