const store = {
    states:{
        mostrarDialogoTapping: false
    },
    getters:{
        getMostrarDialogoTapping(state){
            return state.mostrarDialogoTapping
        }
    }, 
    mutations:{
        change(states, mostrarDialogoTapping){
            states.mostrarDialogoTapping = mostrarDialogoTapping
        }
    }
}

export default store