import ReactDOM from 'react-dom'
import React from 'react'
import getCalculatedHexColor from './getCalculatedHexColor'

const initialize = () => {


  class App extends React.Component {
    render() {
      return (
        <div>
          
        </div>
      )
    }
  }

  ReactDOM.render(
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
