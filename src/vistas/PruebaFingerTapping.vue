<template>
    <div>
        <finger-tapping-test/>
        <dialogo-nivel :titulo = 'titulo' :mensaje = 'mensaje'/>
    </div>
</template>

<script>
import FingerTappingTest from "../components/FingerTappingTest"
import DialogoNivel from "../components/DialogoNivel"

export default {
    data(){
        return {
            titulo: 'Por favor aumente la velocidad de los tappings',
            mensaje: ['Cómodo', 'Rápido', 'Cómodo', 'Lento']
        }
    },
    computed:{
        eventos(){
            return this.$store.getters.getMonstrarDialogoTapping()
        }
    }
}
</script>

<style>

</style>
