const store = {
    states:{
        usuarios:[]
    },
    getters:{
       getPacientes(state){
            return states.usuarios
       },
       getListaPorID(state){
           return usuarioID =>state.pacientes.filter(paciente => paciente.usuarioID == usuarioID)
       }
    }, 
    mutations:{
        agregarPaciente(state, paciente){
            
        }
    },
    actions:{
       
    }
}

export default store