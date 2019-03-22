<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>      
            <v-card>
                <v-toolbar color="transparent" flat>
                    <v-toolbar-title>
                        {{titulo}}
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
                    <template v-for="(pacienteList, index) in pacientes">                        
                        <paciente :key="pacienteList.Id" :paciente="pacienteList" :esUltimoPaciente="pacientes.length - 1 == index "></paciente>                        
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
    props:{
        titulo: String,
        pacientes: Array,
        agragarPaciente: Function
    },
    data:{
        return: {
            pacienteNuevo: {}
        }
    },
    methods:{
        agregarPaciente(){
            this.agragarPaciente(this.pacienteNuevo).then(()=>{
                this.pacienteNuevo = {}
            }).catch((error)=>{
                this.pacienteNuevo = {}
            })
        }
    }
}
</script>

<style>

</style>
