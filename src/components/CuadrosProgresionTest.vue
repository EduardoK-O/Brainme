<template>
    <v-card
      class="mx-auto"
      color="#545454"
      dark
      max-width="600"
    >

      <v-card-title>
        <v-icon
          large
          left 
        >
          check_box
        </v-icon>
        <span class="title font-weight-light">Cuadros Progresión Test</span>
      </v-card-title>

      <div >
        <v-card-text class="headline font-weight-bold">
          {{texto}}
        </v-card-text>
      </div>
      <v-card-actions>
        <v-list-title class="grow">
          <v-layout
              align-center
              justify-center
          >
            <div v-if="mostrarBoton">
                <v-btn @click="comenzarTest" color="sucess" >Comenzar prueba</v-btn>
            </div>

            <div v-if="mostrarCuadricula">
              <v-container grid-list-md align-center>
                <v-layout row wrap v-for="(boton, fila) in botones" :key="fila">
                  <v-flex xs3 order-lg2 v-for="(boton2, columna) in botones" :key="columna">
                      <v-card dark  color="#DDFF42">
                        <v-card-actions>
                          <v-card  
                              flat 
                              tile 
                              dark
                              @click="seleccionarCuadro(fila, columna)" 
                              style="width:80px; height:80px" :color= "bckgrdColor[calcularIndice(fila, columna)]"
                          >
                          </v-card>
                        </v-card-actions>
                      </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-layout>

        </v-list-title>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        juego:{
            intentos: 2,
            nivel: 1,
            secuenciaActual: [],
            seleccionados: [],
            ensayoCorrecto: true,
        },

        mostrarTexto: true,
        mostrarBoton: true,
        mostrarCuadricula: false,
        presionable: false,

        segundo: -1,
        tiempoMinEspera: -1,
        tiempoMaxEspera: 10,
        cuentaRegresiva: 10,
        intervalo: 1000,
        
        botones: [1, 2, 3, 4],
        elementosColumna: 4,

        secuenciaNivel1:{
            ensayo1: [1, 2],
            ensayo2: [8, 12]
        },
        secuenciaNivel2:{
            ensayo1: [6, 12, 14],
            ensayo2: [2, 15, 13]
        },
        secuenciaNivel3:{
            ensayo1: [8, 3, 9, 10],
            ensayo2: [5, 2, 16, 11]
        },
        secuenciaNivel4:{
            ensayo1: [3, 10, 12, 16, 9],
            ensayo2: [14, 12, 8, 6, 2]
        },
        secuenciaNivel5:{
            ensayo1: [7, 9, 14, 6, 8, 12],
            ensayo2: [13, 9, 12, 6, 10, 5]
        },
        secuenciaNivel6:{
            ensayo1: [12, 3, 6, 8, 10, 15, 1],
            ensayo2: [6, 3, 14, 2, 12, 9, 10]
        },

        secuenciaNivel7:{
            ensayo1: [16, 14, 15, 4, 6, 13, 8, 11],
            ensayo2: [2, 15, 16, 12, 3, 6, 9, 7]
        },
        secuenciaNivel8:{
            ensayo1: [5, 6, 15, 4, 7, 3, 12, 11, 10],
            ensayo2: [ 3, 16, 10, 15, 8, 11, 1, 2, 5]
        },
        secuenciaNivel9:{
            ensayo1: [4, 9, 16, 13, 2, 6, 10, 12, 5, 8],
            ensayo2: [6, 2, 10, 14, 13, 3, 9, 12, 8, 4]
        },
        secuenciaNivel10:{
            ensayo1: [7, 8, 14, 1, 13, 11, 6, 3, 15, 9, 1],
            ensayo2: [7, 3, 5, 16, 11, 14, 8, 15, 9, 10, 6]
        },
        secuenciaNivel11:{
            ensayo1: [14, 3, 1, 13, 10, 9, 2, 5, 6, 8, 12, 11],
            ensayo2: [12, 14, 3, 9, 11, 15, 5, 4, 10, 1, 7, 16]
        },
        secuenciaNivel12:{
            ensayo1: [1, 3, 2, 14, 12, 13, 4, 16, 15, 9, 8, 11, 6],
            ensayo2: [4, 3, 11, 15, 2, 14, 7, 6, 5, 16, 8, 12, 13]
        },

        colorGris: "#545454",
        colorAmarillo: "#DDFF42",
        texto: "Repita la secuencia que se indica en pantalla",

        bckgrdColor: ["#545454", "#545454", "#545454", "#545454", 
                      "#545454", "#545454", "#545454", "#545454",
                      "#545454", "#545454", "#545454", "#545454", 
                      "#545454", "#545454", "#545454", "#545454"] 
    }),

    methods:{
        comenzarTest: function(){
            if(this.mostrarBoton){
                this.mostrarTexto = false
                this.mostrarBoton = false
                this.mostrarCuadricula = true
                
                
            }
            this.comenzarJuego()
        },

        comenzarJuego: function(nivel){ 
            this.presionable = false
            switch(this.juego.nivel){
                case 1:
                    this.seleccionarSecuencia(this.secuenciaNivel1)
                break
                case 2:
                    this.seleccionarSecuencia(this.secuenciaNivel2)
                break
                case 3:
                    this.seleccionarSecuencia(this.secuenciaNivel3)
                break
                case 4:
                    this.seleccionarSecuencia(this.secuenciaNivel4)
                break
                case 5:
                    this.seleccionarSecuencia(this.secuenciaNivel5)
                break
                case 6:
                    this.seleccionarSecuencia(this.secuenciaNivel6)
                break
                case 7:
                    this.seleccionarSecuencia(this.secuenciaNivel7)
                break
                case 8:
                    this.seleccionarSecuencia(this.secuenciaNivel8)
                break
                case 9:
                    this.seleccionarSecuencia(this.secuenciaNivel9)
                break
                case 10:
                    this.seleccionarSecuencia(this.secuenciaNivel10)
                break
                case 11:
                    this.seleccionarSecuencia(this.secuenciaNivel11)
                break
                case 12:
                    this.seleccionarSecuencia(this.secuenciaNivel12)
                break
            }
        },

        seleccionarSecuencia: function(nivelSeleccionado){
            if(this.juego.intentos == 1){
                    this.juego.secuenciaActual = nivelSeleccionado.ensayo2
            }else{
                    this.juego.secuenciaActual = nivelSeleccionado.ensayo1
            }
            this.iniciarSecuencia(this.juego.secuenciaActual)
        },

        iniciarSecuencia: function(listaBotones){
            this.texto = "Observe la secuencia:"
            this.segundo = this.tiempoMinEspera
            this.juego.ensayoCorrecto = true
            this.timer(listaBotones.length)
        },

        timer: function(tiempoMax){
            this.interval1 = setInterval(() => {
                if(this.segundo == tiempoMax-1){
                    this.texto = "Repita la secuencia:"
                    this.presionable = true
                    clearInterval(this.interval1)
                    this.counterDown()
                }
                this.segundo++
                console.log("TimerSegundo: " + this.segundo)
            }, this.intervalo)
        },

        iluminarCuadro: function(indice){
            if(indice > 0 ){
                this.bckgrdColor.splice(this.juego.secuenciaActual[indice-1]-1, 1, this.colorGris)
            }
            if(indice <= this.juego.secuenciaActual.length-1){
                this.bckgrdColor.splice(this.juego.secuenciaActual[indice]-1, 1, this.colorAmarillo)
            }
        },
    
        seleccionarCuadro: function(fila, columna){
            if(this.presionable){
                this.bckgrdColor.splice(this.calcularIndice(fila, columna), 1, this.colorAmarillo)
                setTimeout(() => this.bckgrdColor.splice(this.calcularIndice(fila, columna), 1, this.colorGris), 200)
                this.juego.seleccionados.push(this.calcularIndice(fila, columna)+1)
                if(this.juego.seleccionados.length == this.juego.secuenciaActual.length){
                    clearInterval(this.interval2)
                    this.validarRespuesta()
                }
                this.cuentaRegresiva = this.tiempoMaxEspera;
            }
        },

        calcularIndice: function(fila, columna){
            return (fila * this.elementosColumna) + columna 
        },

        counterDown: function(){
            this.interval2 = setInterval(() => {
                this.cuentaRegresiva--
                console.log("TimerCounterDown: " + this.cuentaRegresiva)
            }, this.intervalo)
        },
        
        validarRespuesta: function(){
            for(var i = 0; i<this.juego.seleccionados.length; i++){
                if(this.juego.secuenciaActual[i] !== this.juego.seleccionados[i]){
                    this.juego.ensayoCorrecto = false
                }
            }

            this.juego.seleccionados = []
            this.juego.secuenciaActual = []

            if(this.juego.ensayoCorrecto){
                this.juego.nivel++
                this.juego.intentos = 2
                alert("Respuesta Correcta!")
                this.comenzarJuego()
            }else{
                alert("Respuesta Incorrecta :(")
                this.juego.intentos--
                this.validarIntentos()
            }
        },

        validarIntentos: function(){
            console.log("intentos: " + this.juego.intentos)
            if(this.juego.intentos > 0){
                alert("Intenta de nuevo")
                this.comenzarJuego()
            }else{
                this.texto = "Test Finalizado"
            }
        }
    },

    watch:{
        segundo(nuevoSegundo){
            if(nuevoSegundo > -1){
                this.iluminarCuadro(nuevoSegundo)
            }
            
        },

        cuentaRegresiva(tiempoRestante){
            if(tiempoRestante == 0){
                alert("Tiempo máximo de respuesta excedido.")
                clearInterval(this.interval2)
                this.juego.intentos--
                this.cuentaRegresiva = this.tiempoMaxEspera
                this.validarIntentos()
            }
        }
        
    }
}
</script>

<style>

</style>
