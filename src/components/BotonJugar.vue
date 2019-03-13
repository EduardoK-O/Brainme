<template>
    <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="light-blue lighten-5"
        class="dark--text"
        @click="loader = 'loading3'"        
      >
        Jugar
        <v-icon right dark>videogame_asset</v-icon>
      </v-btn>
</template>

<script>
export default {
data () {
    return {
      loader: null,      
      loading3: false      
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    }
  }
}
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
