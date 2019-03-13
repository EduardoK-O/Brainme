<template>
    <formulario-base titulo="REGISTRARSE" :error="error">
        <v-form v-model="valido" slot="formulario">
            <v-text-field v-model="nombreCompleto" label="Nombre completo" :rules="reglasNombre">
            </v-text-field>  
             <v-text-field v-model="email" label="Email" :rules="reglasEmail">
            </v-text-field>  
             <v-text-field v-model="password" label="contraseña" :rules="reglasPassword" type="password">
            </v-text-field>    
             <v-text-field v-model="repetirPassword" label="repita su contraseña" :rules="reglasRepetirPassword" type="password">
            </v-text-field>  
            <v-btn :loading="cargandoFormulario" :disabled="!valido" color="primary" block>Registrarse</v-btn>  
            <router-link to="/">Ya tiene una cuenta?</router-link>
        </v-form>
    </formulario-base>
</template>

<script>
import FormularioBase from './FormularioBase.vue'
import {mixinFormulario} from '../mixins'
export default {
    components:{FormularioBase},
    mixins:[mixinFormulario],
    data(){
        return{
            nombreCompleto: '',
            repetirPassword: ''
        }
    },
    methods:{
        crearUsuario(){
            let nuevoUsuario ={}
            this.cargandoFormulario = true
            nuevoUsuario.nombreCompleto = this.nombreCompleto
            nuevoUsuario.repetirPassword = this.password
            nuevoUsuario.email = this.email
            this.$store.dispatch('crearUsuario', nuevoUsuario).then((usuario) =>{
                this.cargandoFormulario = false
            }).catch((error)=>{
                this.cargandoFormulario = false
                this.error = error
            })

        }
    }

}
</script>

<style>

</style>
