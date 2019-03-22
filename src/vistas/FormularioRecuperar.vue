<template>
    <formulario-base titulo="Recuperar contraseña" :error="error">
        <v-form v-model="valido" slot="formulario">
            <v-text-field v-model="email" label="Email" :rules="reglasEmail">
            </v-text-field>  
            <v-btn color="green" @click="recuperarPassword" :disabled="!valido" :loading="cargandoFormulario" block dark>Recuperar contraseña</v-btn>
            <v-alert color="success" v-show="Boolean(exito)">{{exito}}</v-alert>
            <router-link to="/">Regresar</router-link>    
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
            exito:''
        }
    },
    methods:{
        recuperarPassword(){
            this.cargandoFormulario = true
            this.$store.dispatch('recuperarPassword', this.email).then(() =>{
                this.cargandoFormulario = false
                this.exito = 'Se ha enviado un correo de recuperación de su contraseña'
            })
        }
    }
}
</script>

<style>

</style>
