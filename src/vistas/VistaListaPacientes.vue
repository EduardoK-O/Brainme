<template>
    <div>
        <lista-pacientes 
        titulo="Mis pacientes" 
        :pacientes="pacientes" 
        :agregarPaciente="agregarPaciente"/>
        <boton-flotante/>    
    </div>    
</template>

<script>
import ListaPacientes from '../components/ListaPacientes.vue'
import BotonFlotante from '../components/BotonFlotante.vue'
import { resolve, reject } from 'q';
// panel/pacientes/ :id
export default {
    components:{ListaPacientes, BotonFlotante},
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
