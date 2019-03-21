const store = {
    states:{
        listas:[]
    },
    getters:{
        listas(state){
            return states.listas
        },
        listaPorId(state){
            return id => states.listas.find(lista => lista.id == id)
        }
    }, 
    mutations:{
        agregarLista(state, lista){
            state.listas.push(lista)
        },
        actualizarLista(state, listaActualizar){
            let index = states.listas.findIndex(lista => lista.id == listaActualizar.id )
            state.lista.splice(indice, 1, lista)
        }
       
    },
    actions:{
        cargarListas({commit, rootGetters}){
            return new Promise((resolve, reject) => {

            })
       },
       agregarListas({},lista){
            return new Promise((resolve, reject) => {

            })
       },
       eliminarListas({}, lista){
            return new Promise((resolve, reject) => {

            })
       },
       actualizarListas({}, lista){
            return new Promise((resolve, reject) => {

            })
        },
        eliminarPacientesPorLista({}, listaID){
            return new Promise((resolve, reject) => {

            })
        }
    }
}

export default store