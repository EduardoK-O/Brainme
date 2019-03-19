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
    }
}
</script>

<style>

</style>
