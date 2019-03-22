import firebase from '../firebase'
import { Promise } from 'q';

const store = {
    state:{
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
            return firebase.auth().signInWithEmailAndPassword(credenciales.email, credenciales.password)            
        },
        loginFacebook({commit}){
            let proveedor = new firebase.auth.FacebookAuthProvider()
            return firebase.auth().signInWithPopup(proveedor)
        },
        loginGoogle({commit}){
            let proveedor = new firebase.auth.GoogleAuthProvider()
            return firebase.auth().signInWithPopup(proveedor)
        },
        logOut({commit}){            
            return new Promise((resolve, reject) => {
                firebase.auth().signOut().then(()=>{
                    commit('login', null)
                    resolve()
                }).catch((error)=> reject(error))
            })
        },
        recuperarPassword({}, email){
            return firebase.auth().sendPasswordResetEmail(email)
        },
        crearUsuario({commit}, nuevoUsuario){           
            return new Promise((resolve, reject) => {                
                firebase.auth().createUserWithEmailAndPassword(nuevoUsuario.email, nuevoUsuario.password).then(() => {
                    var user = firebase.auth().currentUser
                    user.updateProfile({
                        displayName: nuevoUsuario.nombreCompleto
                    }).then(()=>{
                        resolve()
                    }).catch((error) => {
                        reject(error)
                    })
                }).catch((error) => reject(error))
            })
        }
    }
}

export default store