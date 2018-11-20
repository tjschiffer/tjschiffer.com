import Vue from 'vue'
import Vuex from 'vuex'
import BgColorChanger from "./vue-components/bg-color-changer";
import TextColorChanger from "./vue-components/text-color-changer";
import NavContent from "./vue-components/nav-content"
import NavSection from "./vue-components/nav-section"
import NavLabel from "./vue-components/nav-label"

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    color: '#000040',
    currentSection: 'welcome',
    newSection: null
  },
  mutations: {
    changeColor(state, color) {
      state.color = color;
    },
    updateCurrentSection(state, currentSection) {
      state.currentSection = currentSection;
    },
    scrollToSection(state, newSection) {
      state.newSection = newSection;
    }
  },

  strict: process.env.NODE_ENV !== 'production'
});

const colors = [
  '#400000',
  '#000040',
  '#002000',
  '#351000',
  '#001020',
  '#250025'
];

const getApprovedColor = () => {
  const x = Math.sin(Math.round(new Date().getTime() / 10000)) / 2 + 0.5;
  const index = Math.floor(x * (colors.length - 1));
  return colors[index];
};

setInterval(() => {
  store.commit('changeColor', getApprovedColor());
}, 1000);
store.commit('changeColor', getApprovedColor());


window.onload = () => {
  new Vue({
    el: '#app',
    store,
    components: {
      BgColorChanger,
      TextColorChanger,
      NavContent,
      NavSection,
      NavLabel
    }
  });
};
