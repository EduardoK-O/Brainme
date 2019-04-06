<template>
  <v-layout row justify-center>
    <v-dialog v-model="mostrarTest" persistent >
      <v-card>
        <slot name="test"></slot>                
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    props:{
        mostrarTest: Boolean
    }
};
    

</script>

<style scope>
.v-overlay--active:before{
    opacity:0.98;
}
</style>
