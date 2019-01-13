import React from 'react'
import { connect } from 'react-redux'
import '../../assets/css/main.css'

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
