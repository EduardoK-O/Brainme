import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import moduloUsuario from './usuario'

export default new Vuex.Store({
    modules:[moduloUsuario]
})