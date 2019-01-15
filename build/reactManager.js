import React from 'react' // eslint-disable-line no-unused-vars
import ReactDom from 'react-dom'
import App from './react-components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  CHANGE_COLOR,
  UPDATE_CURRENT_SECTION,
  SCROLL_TO_SECTION,
  REGISTER_SECTION,
  UPDATE_NAV_CONTENT_SCROLL
} from './redux/actionTypes'

const initialize = () => {
  const initialState = {
    color: '#000040',
    sections: [],
    currentSection: 'welcome',
    scrollToSection: null,
    navContentScroll: {
      scrollTop: 0,
      scrollDirection: 'down'
    }
  }

  // Note that Redux documentation recommends having the reducer(s) and store in separate files
  // See Redux examples in documentation: https://redux.js.org/introduction/examples
  // With such a simple store and availability of redux-react binding, separate files were not necessary
  const store = createStore((state = initialState, action) => {
    switch (action.type) {
      case CHANGE_COLOR:
        return Object.assign({}, state, { color: action.color })
      case UPDATE_CURRENT_SECTION:
        return Object.assign({}, state, { currentSection: action.currentSection })
      case SCROLL_TO_SECTION:
        return Object.assign({}, state, { scrollToSection: action.scrollToSection })
      case REGISTER_SECTION:
        return Object.assign({}, state, { sections: [...state.sections, action.sectionTitle] })
      case UPDATE_NAV_CONTENT_SCROLL:
        return Object.assign({}, state, {
          navContentScroll: {
            scrollTop: action.scrollTop,
            scrollDirection: action.scrollDirection
          }
        })
      default:
        return state
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  )
}

const destroy = () => {
  ReactDom.unmountComponentAtNode(document.getElementById('app'))
}

export default {
  initialize,
  destroy
}
