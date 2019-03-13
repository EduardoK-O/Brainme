<template>
    <v-toolbar app flat>
        <v-toolbar-side-icon @click="notificarDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>brainmi</v-toolbar-title>
    </v-toolbar>
</template>

<script>
import bus from '../bus'
export default {
    methods:{
        notificarDrawer(){
            bus.$emit('notificarDrawer')
        }
    }
}
</script>

<style>

</style>
