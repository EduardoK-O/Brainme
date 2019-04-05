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
                        <v-layout row wrap v-for="(fila, index) in botones" :key="index">
                            <v-flex xs3 order-lg2 v-for="(boton, index2) in botones" :key="index2">
                                <v-card dark  color="#DDFF42">
                                    <v-card-actions>
                                        <v-btn color="#545454" style="width:80px; height:80px"></v-btn>
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
        mostrarTexto: true,
        mostrarBoton: true,
        mostrarCuadricula: false,
        texto: "Por favor, repita la secuencia que se indica en pantalla:",
        botones: [1, 2, 3, 4],
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
        }
    }),

    methods:{
        comenzarTest: function(){
            if(this.mostrarBoton){
                this.mostrarTexto = false
                this.mostrarBoton = false
                this.mostrarCuadricula = true
            }
        },

        metodoDeEjecucion: function(){

        }

        
    }
}
</script>

<style>

</style>


