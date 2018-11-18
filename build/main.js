import Vue from 'vue'
import Vuex from 'vuex'
import BgColorChanger from "./vue-components/bg-color-changer";
import TextColorChanger from "./vue-components/text-color-changer";

Vue.component('bg-color-changer', BgColorChanger);
Vue.component('text-color-changer', TextColorChanger);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    color: '#000040'
  },
  mutations: {
    changeColor(state, color) {
      state.color = color;
    }
  },
  actions: {
    changeColor(context, color) {
      context.commit('changeColor', color);
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
  const x = Math.sin(new Date().getTime()) * 10000;
  const y = x - Math.floor(x);
  const index = Math.floor(y * (colors.length - 1));
  return colors[index];
};

setInterval(() => {
  store.commit('changeColor', getApprovedColor());
}, 1000);
store.commit('changeColor', getApprovedColor());


window.onload = () => {
  new Vue({
    el: '#app',
    store
  });
};
