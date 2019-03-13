import { reject } from "q";

const store = {
    states:{
        pacientes:[]
    },
    getters:{
       getPacientes(state){
            return states.pacientes
       },
       getListaPorID(state){
           return usuarioID =>state.pacientes.filter(paciente => paciente.usuarioID == usuarioID)
       }
    }, 
    mutations:{
        agregarPaciente(state, paciente){
            states.pacientes.push(paciente)
        },
        actualizarPaciente(state, paciente){
            let index = states.pacientes.findIndex(pac => pac.id == paciente.id )
            state.pacientes.splice(indice, 1, paciente)
        }
    },
    actions:{
       cargarPacientes({commit, rootGetters}){
            return new Promise((resolve, reject) => {

            })
       },
       agregarPaciente({},paciente){
            return new Promise((resolve, reject) => {

            })
       },
       eliminarPaciente({}, paciente){
            return new Promise((resolve, reject) => {

            })
       },
       actualizarPaciente({}, paciente){
        return new Promise((resolve, reject) => {

        })
   }
    }
}

export default store