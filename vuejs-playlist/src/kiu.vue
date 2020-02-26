<template>
<ul>
  <li v-for="kiu in kius">{{kiu}}</li>
</ul>

</template>

<script>
export default {

  data () {
    return {
    kius : ['kiu','xinh','oi','la','xinh']
    }
  }

}
</script>

<style>

</style>
