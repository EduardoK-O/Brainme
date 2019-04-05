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
                  <boton-jugar/>
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
                  <boton-jugar/>
                  <v-spacer></v-spacer>
                  
                </v-card-actions>
              </v-card>
            </v-flex>                        
          </v-layout>
        </v-container>      
        <tapping/>         
      </v-card>      
</template>

<script>
import Hanoi from "../assets/hanioTrans.png"
import BotonJugar from "../components/BotonJugar.vue"
import Tapping from "../components/FingerTappingTest.vue"

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
    components:{ BotonJugar , Tapping}
    
}
</script>

<style>

</style>
