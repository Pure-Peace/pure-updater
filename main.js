import Vue from 'vue'
import App from './App'

const currentVersion = {
    id: 1000
}

Vue.config.productionTip = false
Vue.prototype.$current = currentVersion

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
