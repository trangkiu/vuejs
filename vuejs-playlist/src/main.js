import Vue from 'vue'
import App from './App.vue'
//import Kiu from './kiu.vue'

export const bus = new Vue();
// register globally a vue file
// we need to pass on the name of the file and property that we want
//Vue.component('kiu',Kiu);

new Vue({
  el: '#app',
  render: h => h(App)
})
