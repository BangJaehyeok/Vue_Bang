import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var app = {
  template: '<div>app</div>'
}

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#PP',
//   render: h => h(App)
// })
