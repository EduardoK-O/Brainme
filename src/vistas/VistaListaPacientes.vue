<template>
    <lista-pacientes/>
</template>

<script>
import ListaPacientes from '../components/ListaPacientes.vue'
import { resolve, reject } from 'q';
export default {
    components:{ListaPacientes},
    computed:{
        pacientes(){

        }
    },
    methods:{
        agregarPaciente(paciente){
            return new Promise((resolve, reject)=>{
                resolve()
            })
        }
    }
}
</script>

<style>

</style>
