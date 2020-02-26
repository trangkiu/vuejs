<template>
  <div >
  <h1>{{title}} </h1>
  <kiu></kiu>
  </div>

</template>

<script>
import Kiu from './kiu.vue'

export default {
  components:{
  'kiu':Kiu
  },

  data () {
    return {
    title : 'Kiu app ',
    }
  }

}
</script>

<style>

</style>
