import React from 'react'
import { connect } from 'react-redux'
import '../../assets/css/main.css'

class NavLabelsMob extends React.Component {
  render () {
    const currentSection = this.props.currentSection
    let sectionNumber = this.props.navLabels.indexOf(currentSection)
    if (sectionNumber === -1) {
      sectionNumber = 0
    }
    const top = sectionNumber * -100 + '%'
    const navLabels = this.props.navLabels.map(sectionTitle => {
      return (
        <div className="height-100 flex flex--align-center flex--justify-center font-size-1-2em" key={sectionTitle}>
          <div>{ sectionTitle }</div>
        </div>
      )
    })

    return (
      <div className="position-relative height-100 overflow-hidden">
        <div
          className="height-100 position-relative transition-top-0-25s"
          style={{ top: top }}>
          {navLabels}
        </div>
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

export default connect(mapStateToProps)(NavLabelsMob)
