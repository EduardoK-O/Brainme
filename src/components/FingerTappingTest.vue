<template>    
    <v-card
      class="mx-auto finggerTapping"      
      dark
      max-width="400"
      @click="agregarTapping"
      :style="myStyle"
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
        pruebaEnCurso: false,
        interval: null,
        tappings: 0,                
        nivelActual: 0,              
        intervalo: 1000,
        mensajeMostrar: [
                          'Tapping a un ritmo cómodo',
                          'Tapping a un ritmo rápido',
                          'Tapping a un ritmo cómodo',
                          'Tapping a un ritmo lento ',
                          'Prueba finalizada'
                          ],
        myStyle:{
                  backgroundColor:"#26c6da" 
                },
        niveles: []

    }),
    methods:{
        comenzarTest: function (){
           if(this.mostrarBoton){
               this.mostrarBoton = false               
           }
           this.pruebaEnCurso = true
           this.comenzarCuentaRegresiva()           

        },
        comenzarCuentaRegresiva: function(){            
            this.interval = setInterval(() => {
            this.segundo++               
            }, this.intervalo)
        },
        agregarTapping(){
          if(this.pruebaEnCurso){
            this.tappings++
          }          
        }
    },   
    watch: {
        segundo(nuevoSegundo){                                  
          switch(nuevoSegundo){
            case 1:
              this.nivelActual++              
              this.texto = this.mensajeMostrar[0]
              this.myStyle.backgroundColor = "#0097A7" 
              this.niveles.push({                
                pacienteID: '',
                usuarioID: '',
                nivel: this.nivelActual,
                tappings: 0,
                media: 0
              })                                                                      
              break
            case 10:
              this.tappings = 0
              this.nivelActual++              
              this.texto = this.mensajeMostrar[1]
              this.myStyle.backgroundColor = "#0091EA"  
              this.niveles.push({                
                pacienteID: '',
                usuarioID: '',
                nivel: this.nivelActual,
                tappings: 0,
                media: 0
              } )                             
              break
            case 20:
              this.tappings = 0
              this.nivelActual++              
              this.texto = this.mensajeMostrar[2]
              this.myStyle.backgroundColor = "#00796B"   
              this.niveles.push({                
                pacienteID: '',
                usuarioID: '',
                nivel: this.nivelActual,
                tappings: 0,
                media: 0
              } )                            
              break
            case 30:
              this.tappings = 0
              this.nivelActual++              
              this.texto = this.mensajeMostrar[3]
              this.myStyle.backgroundColor = "#004D40"                            
              this.niveles.push({                
                pacienteID: '',
                usuarioID: '',
                nivel: this.nivelActual,
                tappings: 0,
                media: 0
              } )   
              break
            case 40:
              this.texto = this.mensajeMostrar[4]
              this.myStyle.backgroundColor = "#26c6da"  
              this.pruebaEnCurso = false                  
              clearInterval(this.interval)
              //bus.$emit('mostrarDialogoNivel', this.nivel[3])
              this.niveles.forEach(nivel => {
                nivel.media = nivel.tappings/10
              })
              console.log(this.niveles)              
              break
          }                
          this.niveles[this.niveles.length - 1].tappings = this.tappings                                                
        }
    }
}
</script>

<style>
.finggerTapping {
    height: 20em;
}
</style>
