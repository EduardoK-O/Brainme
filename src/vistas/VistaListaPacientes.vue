<template>
    <lista-pacientes 
        titulo="Mis pacientes" 
        :pacientes="pacientes" 
        :agregarPaciente="agregarPaciente"/>
</template>

<script>
import ListaPacientes from '../components/ListaPacientes.vue'
import { resolve, reject } from 'q';
// panel/listas/ :id
export default {
    components:{ListaPacientes},
    computed:{
        pacientes(){
            let id = this.$route.params.id
            console.log(this.$store.getters.getPacientes)
            return this.$store.getters.getPacientes
        }
    },
    methods:{
        agregarPaciente(paciente){
            let ListaId = this.$route.params.id
            let nuevoPaciente = {}
            nuevoPaciente = paciente
            nuevoPaciente.listaId = ListaId
            return this.$store.dispatch('agregarPaciente', nuevoPaciente)
        }
    }
}
</script>

<style>

</style>
