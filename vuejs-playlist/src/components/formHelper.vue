<template>
<div>
  <!-- <slot name ="title"></slot>
  <h1> I am form helper </h1>
  <slot name ="text"></slot> -->

  <h1>Please fill out form...</h1>
  <form>
    <div id="form-header">
      <slot name="header"></slot>
    </div>
    <div id="form-fields">
      <slot name="fields"></slot>
    </div>
    <div id="form-controls">
      <slot name="controls"></slot>
    </div>
    <div id="useful-links">
      <ul>
        <li><a href="#"></a> Link 1</li>
        <li><a href="#"></a>  Link 2</li>
        <li><a href="#"> </a> Link 3</li>
        <li><a href="#"></a>  Link 4</li>

      </ul>
    </div>

  </form>
</div>

</template>

<script>

export default {
  components:{

  },
  data(){
    return{


    }
  },
  methods:{

  }

}
</script>

<style scoped>

h1{
  color:red;
}


</style>
