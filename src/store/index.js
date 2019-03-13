import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import moduloUsuario from './usuario'
import moduloPaciente from './pacientes'

export default new Vuex.Store({
    modules:[moduloUsuario, moduloPaciente]
})