import Vue from 'vue'
import Vuex from 'vuex'
import BgColorChanger from './vue-components/bg-color-changer'
import TextColorChanger from './vue-components/text-color-changer'
import NavContent from './vue-components/nav-content'
import NavSection from './vue-components/nav-section'
import NavLabels from './vue-components/nav-labels'
import NavLabelsMob from './vue-components/nav-labels-mob'
import getCalculatedHexColor from './getCalculatedHexColor'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    color: '#000040',
    sections: [],
    currentSection: 'welcome',
    scrollToSection: null
  },
  mutations: {
    changeColor (state, color) {
      state.color = color
    },
    updateCurrentSection (state, currentSection) {
      state.currentSection = currentSection
    },
    scrollToSection (state, scrollToSection) {
      state.scrollToSection = scrollToSection
    },
    registerSection (state, newSection) {
      state.sections.push(newSection)
    }
  },

  strict: process.env.NODE_ENV !== 'production'
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: {
    BgColorChanger,
    TextColorChanger,
    NavContent,
    NavSection,
    NavLabels,
    NavLabelsMob
  },
  data: {
    calculatedHexColorInterval: null
  },
  store,
  created () {
    this.store.commit('changeColor', getCalculatedHexColor())
    // store and wrap it to check the color theme every 5 seconds
    this.calculatedHexColorInterval = setInterval(() => {
      this.store.commit('changeColor', getCalculatedHexColor())
    }, 5000)
  },
  destroyed () {
    clearInterval(this.calculatedHexColorInterval)
  }
})
