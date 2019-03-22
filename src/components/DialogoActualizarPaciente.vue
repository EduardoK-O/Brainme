<template>
    <v-dialog v-model = "dialogoPaciente" width="300">
        <v-card>
            <v-toolbar>
                <v-toolbar-title>
                    Actualizar Paciente
                </v-toolbar-title>
            </v-toolbar>
        </v-card>
    </v-dialog>
</template>

<script>
import bus from '../bus'
export default {
    beforeMount(){
        bus.$on('dialogoPaciente', (pacienteId) =>{
            this.dialogoPaciente = !this.dialogoPaciente
        })
    },
    data(){
        return {
            dialogoPaciente: false
        }
    }

}
</script>

<style>

</style>
