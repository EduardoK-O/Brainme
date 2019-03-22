<template>
  <v-app>
   <router-view/>
  </v-app>
</template>

<script>
import firebase from './firebase'

export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      //
    }
  },
  beforeCreate(){
     firebase.auth().onAuthStateChanged((user)=>{
       if(user){
         this.$store.commit('login', user)
         this.$router.push('/panel')
       }else{
         this.$router.push('/')
       }
     })
  }
}
</script>
