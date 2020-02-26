<template>
  <div >
  <app-header></app-header>
  <h1>{{title}} </h1>
  <kiu></kiu>
  <app-footer></app-footer>
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
    }
  }

}
</script>

<style scoped>
h1{
color: purple;
}
</style>
