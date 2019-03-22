import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import FormularioIngreso from './vistas/FormularioIngreso.vue'
import FormularioRegistro from './vistas/FormularioRegistro.vue'
import FormularioRecuperar from './vistas/FormularioRecuperar.vue'
import PanelPrincipal from './vistas/PanelPrincipal.vue'

import ListaJuegos from './vistas/ListaJuegos.vue'
import VistaListaPacientes from './vistas/VistaListaPacientes.vue'
import PruebaFingerTapping from './vistas/PruebaFingerTapping.vue'

const rutas = [
    {
        path:'/',
        component: FormularioIngreso
    },
    {
        path:'/registrese',
        component:FormularioRegistro
    },
    {
        path:'/recuperar',
        component: FormularioRecuperar
    },
    {
        path:'/panel',
        component:PanelPrincipal,
        children:[
            {
                path:'pruebas',
                component: ListaJuegos,                
            },
            {
                path:'pacientes/:id',
                component: VistaListaPacientes
            }            
        ]
    }
]

export default new VueRouter({
    routes:rutas
})