<template>    
    <v-card
      class="mx-auto finggerTapping"
      color="#26c6da"
      dark
      max-width="400"
      @click="agregarTapping"
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
import bus from '../bus'

export default {    
    data: () => ({
        texto: "Por favor, haga tapping en esta zona azul conforme al ritmo que se le pida",
        segundo: 0,
        mostrarBoton: true,
        interval: null,
        tappings: 0,
        nivelActual: 0,        
        tappings: 0,
        nivel: [1,2,3,4],
        intervalo: 1000
    }),
    methods:{
        comenzarTest: function (){
           if(this.mostrarBoton){
               this.mostrarBoton = false
           }
           this.comenzarCuentaRegresiva()
           this.texto = 'Tapping aqui con ritmo cómodo \n \n \n \n'

        },
        comenzarCuentaRegresiva: function(){            
            this.interval = setInterval(() => {
            this.segundo++   
            console.log(this.segundo)         
            }, this.intervalo)
        },
        agregarTapping(){
          this.tappings++
          console.log("Numero de taps: "+ this.tappings)
        }
    },   
    watch: {
        segundo(nuevoSegundo){
            if( nuevoSegundo == 40){
              clearInterval(this.interval)
            }else if(nuevoSegundo%10 == 0){                       
                switch(nuevoSegundo){
                  case 10:
                    bus.$emit('mostrarDialogoNivel', this.nivel[0])                                     
                    break
                  case 20:
                    bus.$emit('mostrarDialogoNivel', this.nivel[1])
                    break
                  case 30:
                    bus.$emit('mostrarDialogoNivel', this.nivel[2])
                    break
                  case 40:
                    bus.$emit('mostrarDialogoNivel', this.nivel[3])
                    break
                }                
                                              
            }            
        }
    }
}
</script>

<style>
.finggerTapping {
    height: 20em;
}
</style>
