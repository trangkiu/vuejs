<template>
  <div id ="pikachu">
    <ul>
      <li v-for="pikachu in pikachus" v-on:click="pikachu.show = !pikachu.show">
        <h2>{{pikachu.name}}</h2>
        <h3 v-show="pikachu.show">{{pikachu.speciality}}</h3>
      </li>
    </ul>
    <button v-on:click="deletePika">Delete a pikachu</button>
  </div>

</template>

<script>
export default {
  // this is the receiving props
  // we define an array with the name of the prop
  // props:['pikachus'],

  // prop validation
  props:{
    pikachus:{
      type: Array,
      required:true
    }
  },

  data () {
    return {

    }
  },
  methods:{
    deletePika:function(){
      this.pikachus.pop();
    }
  },
  // life cycle hooks
  beforeCreate(){
    alert ('before created');
  },
  created(){
    alert ('created');
  },
  beforeMount(){
    alert (' before mount');
  },
  mounted(){
    alert ('mounted');
  },
  beforeUpdate(){
    alert ('beforeUpdate');
  },
  updated(){
    alert ('updated');
  }

}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
