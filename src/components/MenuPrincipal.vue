<template>
    <v-navigation-drawer v-model="drawer" app>
        <v-list>
            <v-list-tile>
                <v-list-tile-avatar size="30">
                    <img :src="usuario.photoURL"/>
                </v-list-tile-avatar>
                <v-list-tile>
                   {{ usuario.displayName}}
                </v-list-tile>                
            </v-list-tile>
            <v-divider/>
             <v-list-tile to='/panel/pacientes'>
                <v-list-tile-action> 
                    <v-icon>assignment_ind</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Mis pacientes</v-list-tile-title>
            </v-list-tile>
             <v-list-tile>
                <v-list-tile-action> 
                    <v-icon>line_weight</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Mis listas de pacientes</v-list-tile-title>
                <v-list-tile-action> 
                    <v-chip color="green" small dark>4</v-chip>
                </v-list-tile-action>
            </v-list-tile> 
            <v-list-tile to="/panel/pruebas"> 
                <v-list-tile-action> 
                    <v-icon>assignment</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Pruebas neurologicas</v-list-tile-title>
                <v-list-tile-action> 
                    <v-chip color="green" small dark>4</v-chip>
                </v-list-tile-action>
            </v-list-tile>                     
            <v-list-tile>
                <v-list-tile-action> 
                    <v-icon>assessment</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Estadistica</v-list-tile-title>
            </v-list-tile>
            <v-divider/>
            <v-list-tile>
                <v-list-tile-action> 
                    <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Salir</v-list-tile-title>
            </v-list-tile>            
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import bus from '../bus'
import imagenPlaceholder from '../assets/user.svg'
export default {
    data(){
        return {
            drawer: false
        }
    },
    computed:{
        usuario(){
            let usuario = this.$store.getters.getUsuario
            if(!usuario){
                return { 
                    photoURL: imagenPlaceholder,
                    displayName: "Alex"
                }
            }else{
                return usuario
            }
        }
    },
    beforeMount(){
        bus.$on('notificarDrawer', ()=>{
            this.drawer= !this.drawer
        })
    }
}
</script>

<style>

</style>
