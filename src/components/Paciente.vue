<template>
    <div>      
        <v-list-tile            
            :key="item.title"
            avatar
            @click="CAMBIARRRR"
        >
            <v-list-tile-avatar>
                <img :src="paciente.avatar">
            </v-list-tile-avatar> 
            <v-list-tile-content>
                <v-list-tile-title v-html="paciente.nombre"><span class="grey--text text--lighten-1">{{paciente.edad}}</span></v-list-tile-title>
                <v-list-tile-sub-title v-html="paciente.observacion"></v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
          <v-divider
            v-if="esUltimoPaciente != true"
            :key="index"            
        ></v-divider>
    </div>
</template>

<script>
export default {
    props:[paciente, esUltimoPaciente]
}
</script>

<style>

</style>
