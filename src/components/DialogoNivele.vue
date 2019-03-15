<template>
    <v-layout row justify-center>
      <v-dialog v-model="mostrar" persistent max-width="290">        
        <v-card>
          <v-card-title class="headline"></v-card-title>
          <v-card-text></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>            
            <v-btn color="green darken-1" flat @click="dialog = false">Continuar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
export default {
    data(){
        return{
            mostrar: false
        }
    }
}
</script>

<style>

</style>
