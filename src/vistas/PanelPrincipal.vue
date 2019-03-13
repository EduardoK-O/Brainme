<template>
    <div>
        <barra-superior/>
        <menu-principal/>
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
export default {
    components:{BarraSuperior, MenuPrincipal}
}
</script>

<style>

</style>
