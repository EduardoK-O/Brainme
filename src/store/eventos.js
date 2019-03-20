const store = {
    states:{
        mostrarDialogoTapping: false
    },
    getters:{
        getUsuario(state){
            return state.mostrarDialogoTapping
        }
    }, 
    mutations:{
        login(states, mostrarDialogoTapping){
            states.mostrarDialogoTapping = mostrarDialogoTapping
        }
    }
}

export default store