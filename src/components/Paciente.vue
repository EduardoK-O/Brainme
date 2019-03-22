<template>
    <div>      
        <v-list-tile                        
            avatar
            @click="mostrarDetalles"
        >
            <v-list-tile-avatar>
                <img :src="paciente.avatar">
            </v-list-tile-avatar> 
            <v-list-tile-content>
                <v-list-tile-title v-html="paciente.nombre"></v-list-tile-title>
                <v-list-tile-sub-title v-html="paciente.observacion"></v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
          <v-divider
            v-if="esUltimoPaciente != true"            
        ></v-divider>
    </div>
</template>

<script>
export default {
    props:{paciente: Object, esUltimoPaciente: Boolean},
    methods:{
        mostrarDetalles(){
            console.log('Hola')
        }
    }
}
</script>

<style>

</style>
