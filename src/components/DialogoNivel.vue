<template>
    <v-layout row justify-center>
      <v-dialog v-model="mostrarDialogoNivel" persistent max-width="290">        
        <v-card>
          <v-card-title class="headline">{{titulo}}</v-card-title>
          <v-card-text>{{mensaje}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>            
            <v-btn color="green darken-1" flat @click="mostrarDialogoNivel = false">Continuar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
import bus from '../bus'

export default {
    beforeMount(){
        bus.$on('mostrarDialogoNivel', (nivel) =>{
          switch(nivel){
            case 1:
              this.titulo = this.titulos[0]
              this.mensaje = this.mensajeMostrar[0]
              break
            case 2:
              this.titulo = this.titulos[1]
              this.mensaje = this.mensajeMostrar[1]
              break
            case 3:
              this.titulo = this.titulos[2]
              this.mensaje = this.mensajeMostrar[2]
              break
            case 4:
              this.titulo = this.titulos[3]
              this.mensaje = this.mensajeMostrar[3]
              break
          }
          this.mostrarDialogoNivel = !this.mostrarDialogoNivel
        })
    },
    props:{
      titulo: String,
      mensaje: String,
      mostrar: Boolean
    },
    data(){
        return{
            mostrarDialogoNivel: false,
            titulos:['Ritmo cómodo', 'Ritmo rápido' ,'Ritmo cómodo', 'Ritmo lento'],
            mensajeMostrar: [
                              'Por favor haga tapping a un ritmo que sea cómodo para usted',
                              'Por favor haga tapping a un ritmo que sea rápido para usted',
                              'Por favor haga tapping a un ritmo que sea cómodo para usted',
                              'Por favor haga tapping a un ritmo que sea lento para usted'
                              ]
        }
    }
}
</script>

<style>

</style>
