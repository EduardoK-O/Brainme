const store = {
    states:{
        usuario: null
    },
    getters:{
        getUsuario(state){
            return state.usuario
        }
    }, 
    mutations:{
        login(states, usuario){
            states.usuario = usuario
        }
    },
    actions:{
        loginCorreo({commit}, credenciales){
            return new Promise((resolve, reject) => {
                resolve()
            })
        },
        loginFacebook({commit}){
            return new Promise((resolve, reject) => {
                resolve()
            })
        },
        loginGoogle({commit}){
            return new Promise((resolve, reject) => {
                resolve()
            })
        },
        logOut({commit}){
            return new Promise((resolve, reject) => {
                resolve()
            })
        },
        crearUsuario({commit}, nuevoUsuario){
            return new Promise((resolve, reject) => {
                resolve()
            })
        }
    }
}

export default store