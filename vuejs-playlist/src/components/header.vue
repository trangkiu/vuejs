<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>

</template>

<script>
import {bus} from "../main.js";
export default {
  props:{
    title:{
      type: String
    }
  },
  // data () {
  //   return{
  //     title:'Vue kiu'
  //   }
  // }
  methods:{
    changeTitle:function(){
      // fire an event
      //this.$emit('changeTitle','Vue Wizard'); // event name and data to pass

// we are not listening to the event in here we only fire event
      bus.$emit('titleChange','Vue Wizard'); // emit event into bus


    }
  }

}
</script>

<style scoped>
header{
  background: lightgreen;
  padding:10px;
}
h1{
  color:#222;
  text-align:center;
}
</style>
