import { reject } from "q";
import firebase from '../firebase'
const db = firebase.firestore()

const store = {
    state:{
        pacientes:[
            {
                id: 1,
                avatar: null,
                nombre: 'Alejandro Sanchez Queb',
                edad: '23',
                observacion: 'Desarrollador de software'
            },
            {
                id: 2,
                avatar: null,
                nombre: 'Alejandra Colli',
                edad: '23',
                observacion: 'Diseñadora'
            },
            {
                id: 3,
                avatar: null,
                nombre: 'Kevin Gamboa Colli',
                edad: '23',
                observacion: 'Desarrollador movil'
            }
        ]
    },
    getters:{
       getPacientes(state){
            return state.pacientes
       },
       getPacientePorLista(state){
           return usuarioID =>state.pacientes.filter(paciente => paciente.usuarioID == usuarioID)
       }
    }, 
    mutations:{
        agregarPaciente(state, paciente){
            state.pacientes.push(paciente)
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
            paciente.archivos = []
            let user = firebase.auth().currentUser
            paciente.userID = user.uid
            db.collection('pacientes').add(paciente)            
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