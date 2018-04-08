import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 这里定义初始值
let state = {
    count:-1
}

export default new Vuex.Store({
    state
})
