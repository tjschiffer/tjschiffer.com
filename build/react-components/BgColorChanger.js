import React from 'react'
import { connect } from 'react-redux'
import '../../assets/css/main.css'

/**
 * Wraps the content and changes the background color based on the state's color attribute
 */
class BgColorChanger extends React.Component {
  render () {
    return (
      <div>
        <div className={this.props.className} style={{ backgroundColor: this.props.color }}>{this.props.children}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

export default connect(mapStateToProps)(BgColorChanger)
