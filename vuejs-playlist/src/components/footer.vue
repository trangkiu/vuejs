<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
  </footer>

</template>

<script>
export default {
  props:{
    title:{
      type: String
    }
  },

  data () {
    return{
      copyright:'Coppyright 2020 Kiu ltd.'
    }
  }

}
</script>

<style scoped>
footer{
  background: #222;
  padding: 10px;
}
p{
  text-align:center;
  color:lightgreen;
}
</style>
