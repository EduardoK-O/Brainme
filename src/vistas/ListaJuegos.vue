<template>
    <v-card>        
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Pruebas psicologicas disponibles</div>
                    <span>Un test psicológico o prueba psicológica es un instrumento experimental que tiene por objeto medir o evaluar una característica psicológica específica, o los rasgos generales de la personalidad de un individuo.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Saber mas</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
  
            <v-flex xs12>
              <v-card color="blue-grey lighten-5" class="dark--text">
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      :src="imagen.photoURL"
                      height="125px"
                      contain
                    ></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Prueba de Torres de Hanoi</div>
                        <div>Descripcion super chula</div>
                        <div>Anonimo</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <boton-jugar/>
                  <v-spacer></v-spacer>
                  
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="cyan" class="white--text">
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      src=""
                      height="125px"
                      contain
                    ></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Prueba Finger Tapping</div>
                        <div>Descripcion super chula</div>
                        <div>Variación hecho por Fernanda</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <boton-jugar @click="mostrarFinger"/>
                   <v-btn  dark @click="mostrarFinger">Boton de muestra para funcionalidad</v-btn>
                  <v-spacer></v-spacer>
                  
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="teal" class="white--text">
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      src=""
                      height="125px"
                      contain
                    ></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Prueba de Memoria de Trabajo Visual</div>
                        <div>Descripcion super chula</div>
                        <div>Variación hecho por Fernanda</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <boton-jugar/>
                  <v-spacer></v-spacer>
                  
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="light-blue" class="white--text">
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      src=""
                      height="125px"
                      contain
                    ></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Prueba MT Vision Progresion</div>
                        <div>Descripcion super chula</div>
                        <div>El autor de este pinchi juego</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <boton-jugar @click="mostrarProgre"/>   
                  <v-btn  dark @click="mostrarProgre">Boton de muestra para funcionalidad</v-btn>               
                  <v-spacer></v-spacer>
                  
                </v-card-actions>
              </v-card>
            </v-flex>                        
          </v-layout>
        </v-container>              
        <dialogo-test :mostrarTest="mostrarProgresion">          
          <progresion slot="test"/>            
        </dialogo-test>   
        <dialogo-test :mostrarTest="mostrarTappingTest">
          <tapping slot="test"/>                     
        </dialogo-test>   
      </v-card>      
</template>

<script>
import Hanoi from "../assets/hanioTrans.png"
import BotonJugar from "../components/BotonJugar.vue"
import Tapping from "../components/FingerTappingTest.vue"
import Progresion from "../components/CuadrosProgresionTest.vue"
import DialogoTest from "../components/DialogoParaTest.vue"

export default {
    props:{
        titulo:String
    },
    computed:{
        imagen(){                                  
            return { 
                photoURL: Hanoi,
                displayName: "Hanio"
            }            
        }
    },
    data(){
      return{
        mostrarTappingTest: false,
        mostrarProgresion: false
      }
    },
    components:{ BotonJugar , Tapping, DialogoTest, Progresion},
    methods:{
      mostrarFinger(){
        this.mostrarTappingTest = true
      },
      mostrarProgre(){
        this.mostrarProgresion = true
      }
    }
    
}
</script>

<style>

</style>
