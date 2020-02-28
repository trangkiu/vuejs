<template>
  <div >
    <form-helper >
      <!-- <h2 slot="title">{{title}}</h2>
      <p slot="text">I am the paragraph </p> -->
      <div slot="header">
        <h3>This is the title of the form</h3>
      </div>

      <div slot="fields">
      <input type="text" placeholder="name" required/>
      <input type="password" placeholder="password" required/>
      </div>

      <div slot="controls">
        <button v-on:click="handlerSubmit">Submit</button>
      </div>
    </form-helper>
  </div>

</template>

<script>
import formHelper from './components/formHelper.vue';


export default {
  components:{
    'form-helper': formHelper,
  },

  data () {
    return {
      title: "I am dynamic slot title",
    }
  },
  methods:{

  }

}
</script>

<style scoped>
h1{
color: purple;
}
</style>
