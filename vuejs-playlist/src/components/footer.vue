<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
  </footer>

</template>

<script>
import {bus} from "../main.js";
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
  },
  // anything inside created will be fired at the beginning
  created(){
    bus.$on('titleChange',(data) => { // call back function that take data we pass
      this.title = data;
    });
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
