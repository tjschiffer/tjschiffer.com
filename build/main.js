import Vue from 'vue'
import Vuex from 'vuex'
import BgColorChanger from "./vue-components/bg-color-changer";
import TextColorChanger from "./vue-components/text-color-changer";
import NavContent from "./vue-components/nav-content"
import NavSection from "./vue-components/nav-section"
import NavLabels from "./vue-components/nav-labels"
import NavLabelsMob from "./vue-components/nav-labels-mob"

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    color: '#000040',
    sections: [],
    currentSection: 'welcome',
    scrollToSection: null
  },
  mutations: {
    changeColor(state, color) {
      state.color = color;
    },
    updateCurrentSection(state, currentSection) {
      state.currentSection = currentSection;
    },
    scrollToSection(state, scrollToSection) {
      state.scrollToSection = scrollToSection;
    },
    registerSection(state, newSection) {
      state.sections.push(newSection);
    }
  },

  strict: process.env.NODE_ENV !== 'production'
});

/**
 * Deterministic function that creates a
 * non-grey dark color using UTC as a seed.
 *
 * See https://www.wolframalpha.com/input/?i=sin(x)%2F1.5+%2B+1%2F3,+sin(x+%2B+PI*+2%2F3)%2F1.5+%2B+1%2F3,+sin(x+%2B+PI+*+4%2F3)%2F1.5+%2B+1%2F3
 * to understand how the shifted sin function is used to
 * create deep reds, greens, blues, and in-betweens.
 * (When the y value goes below 0, that value will be 0).
 *
 * @returns {string}
 */
const getCalculatedHexColor = () => {
  const seed = Math.round(new Date().getTime() / 100) / 100000;
  // Use shifted sin functions to create values between 0 and 50
  return [
    n => Math.sin(n),
    n => Math.sin(n + Math.PI * 2/3),
    n => Math.sin(n + Math.PI * 4 / 3)
  ].reduce((hexColor, func) => {
    // Use provided function to generate a value between 0 and 50
    const colorVal = Math.round(Math.max(func(seed) / 1.5 + 1 / 3, 0) * 50);
    // Add the number as a hex number making sure it's a padding two digit number
    hexColor = hexColor + ('0' + colorVal.toString(16)).slice(-2);
    return hexColor;
  }, '#');
};

// Vuex goes not have lifecycle events so just take the
// store and wrap it to check the color theme every 5 seconds
setInterval(() => {
  store.commit('changeColor', getCalculatedHexColor());
}, 5000);
store.commit('changeColor', getCalculatedHexColor());


window.onload = () => {
  new Vue({
    el: '#app',
    store,
    components: {
      BgColorChanger,
      TextColorChanger,
      NavContent,
      NavSection,
      NavLabels,
      NavLabelsMob
    }
  });
};
