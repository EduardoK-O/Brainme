<template>
    <div>
        <barra-superior/>
        <menu-principal/>
        <dialogo-actualizar-paciente/>
        <dialogo-nivel/>
        <v-content>
            <v-container>
                <v-layout>
                    <v-flex xs12>
                        <router-view/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import BarraSuperior from '../components/BarraSuperior.vue'
import MenuPrincipal from '../components/MenuPrincipal.vue'
import DialogoActualizarPaciente from '../components/DialogoActualizarPaciente.vue'
import DialogoNivel from '../components/DialogoNivel.vue'
export default {
    components:{BarraSuperior, MenuPrincipal, DialogoActualizarPaciente, DialogoNivel}
}
</script>

<style>

</style>
