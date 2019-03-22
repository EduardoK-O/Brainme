<template>
    <formulario-base titulo="INGRESAR" :error="error">
        <v-form v-model="valido" slot="formulario">
            <v-text-field :rules="reglasEmail" label="Email" v-model="email"/>
            <v-text-field label="Password" type="password" v-model="password"/>
            <div>
                <router-link to="/recuperar" >Olvido su contraseña?</router-link>                
            </div>
            <v-btn :disabled="!valido" block class="primary elevation-0" @click="loginCorreo" :loading="cargandoFormulario" >Login</v-btn>
            <div class="my-2">
                <router-link class="caption" to="/registrese" >No tiene una cuenta?</router-link>                
            </div>
            <v-divider/>
            <v-btn :loading="cargandoFormulario" @click="loginFacebook" block class='my-3 bg-facebook' dark>
                <img class="mr-1 mb-1" src="../assets/F_icon.svg" height="16" >
                facebook
            </v-btn>
            <v-btn :loading="cargandoFormulario" @click="loginGoogle" block>
                <img class="mr-1 mb-1" src="../assets/G_icon.svg" height="16" >
                google
            </v-btn>
        </v-form>
    </formulario-base>
</template>

<script>
import FormularioBase from './FormularioBase.vue'
import {mixinFormulario} from '../mixins'
export default {
    components:{FormularioBase},
    mixins:[mixinFormulario],
    methods:{
        loginCorreo(){
            this.cargandoFormulario = true
            this.$store.dispatch('loginCorreo', {
                email: this.email,
                password: this.password

            }).then((user) => {
                this.cargandoFormulario = false
            }).catch((error)=>{
                this.cargandoFormulario = false
                this.error = error
            })
        },
        loginFacebook(){
            this.cargandoFormulario = true
            this.$store.dispatch('loginFacebook', ).then((user) => {
                this.cargandoFormulario = false
            }).catch((error)=>{
                this.cargandoFormulario = false
                this.error = error
            })
        },
        loginGoogle(){
            this.cargandoFormulario = true
            this.$store.dispatch('loginGoogle').then((user) => {
                this.cargandoFormulario = false
            }).catch((error)=>{
                this.cargandoFormulario = false
                this.error = error
            })
        }
    }
}
</script>

<style scoped>
    .bg-facebook{
        background-color: #3b5998 !important;
    }
</style>
