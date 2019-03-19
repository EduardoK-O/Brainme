<template>    
    <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      max-width="400"
    >
      <v-card-title>
        <v-icon
          large
          left
        >
          touch_app
        </v-icon>
        <span class="title font-weight-light">Finger Tap Test</span>
      </v-card-title>
  
      <v-card-text class="headline font-weight-bold">
        {{texto}}
      </v-card-text>      
      <v-card-actions>
           <v-list-tile class="grow">
            <v-layout
                align-center
                justify-end
            >
            <div v-if="mostrarBoton">
                <v-btn @click="comenzarTest" color="success" >Comenzar prueba</v-btn>
            </div>
          </v-layout>

           </v-list-tile>
      </v-card-actions>
    </v-card>  
</template>

<script>
export default {
    data: () => ({
        texto: "Por favor, haga tapping en esta zona azul conforme al ritmo que se le pida",
        segundo: 0,
        mostrarBoton: true,
        interval: null,
        tappings: 0,
        nivel: 0,
        mostrarDialogo: false
    }),
    methods:{
        comenzarTest: function (){
           if(this.mostrarBoton){
               this.mostrarBoton = false
           }
           this.comenzarCuentaRegresiva()

        },
        comenzarCuentaRegresiva: function(){
            this.interval = setInterval(() => {
            this.segundo++   
            console.log(this.segundo)         
            }, 1000)
        }        
    },
    computed: {
        
    },
    watch: {
        segundo(nuevoSegundo){
            if(nuevoSegundo >= 10){
                clearInterval(this.interval)                
                this.mostrarDialogo = true                
            }            
        }
    }
}
</script>

<style>

</style>
