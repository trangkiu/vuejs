<template>
  <div >
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <h1>{{title}} </h1>
  <kiu v-bind:pikachus="pikachus"></kiu>
  <app-footer v-bind:title="title"></app-footer>
  </div>

</template>

<script>
import Kiu from './components/kiu.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

export default {
  components:{
  'kiu':Kiu,
  'app-header':Header,
  'app-footer':Footer
  },

  data () {
    return {
    title : 'Kiu app ',
    pikachus : [
      {name: 'Ryu', speciality: 'Vue Components', show: false},
      {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
      {name: 'Hitoshi', speciality: 'Click Events', show: false},
      {name: 'Tango', speciality: 'Conditionals', show: false},
      {name: 'Kami', speciality: 'Webpack', show: false},
      {name: 'Yoshi', speciality: 'Data Diggin', show: false}
    ]
    }
  },
  methods:{
    updateTitle:function(event){
      this.title = event;
    }
  }

}
</script>

<style scoped>
h1{
color: purple;
}
</style>
