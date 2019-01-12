import React from 'react'
import ReactDom from 'react-dom'
import getCalculatedHexColor from './getCalculatedHexColor'

const initialize = () => {

  class App extends React.Component {
    componentDidMount() {
      console.log(this.props.children);
    }

    render() {
      return (
        <div>
          <h2>React sucks</h2>
        </div>
      )
    }
  }

  ReactDom.render(
    <App />,
    document.getElementById('app')
  )
}

const destroy = () => {
  console.log('destroy')
}

export default {
  initialize,
  destroy
}
