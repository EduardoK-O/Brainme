<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>      
            <v-card>
                <v-toolbar color="transparent" flat>
                    <v-toolbar-title>
                        Mis Pacientes
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list three-line>
                    <v-subheader>                                                    
                        pacientes
                    </v-subheader>
                    <template v-for="(paciente, index) in pacientes">                        
                        <paciente :key="paciente.nombre" :paciente="paciente" :esUltimoPaciente="pacientes.length - 1 == index "></paciente>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Paciente from '../components/Paciente.vue'
export default {
    components: {Paciente},
    computed:{
        paciente: $state.getters.getPacientes()
    }
}
</script>

<style>

</style>
