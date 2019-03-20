import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import moduloUsuario from './usuario'
import moduloPaciente from './pacientes'
import moduloEventos from './eventos'

export default new Vuex.Store({
    modules:[moduloUsuario, moduloPaciente, moduloEventos]
})