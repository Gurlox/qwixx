import Vue from 'vue'
import _ from 'lodash'
import App from './App.vue'

Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.prototype.RED = 'red'
Vue.prototype.BLUE = 'blue'
Vue.prototype.YELLOW = 'yellow'
Vue.prototype.GREEN = 'green'

new Vue({
    render: h => h(App)
}).$mount("#app");
