new Vue({
  el: '#vue-app',
  data:{
    output:'your favourite foods'
  },
  methods:{
    readRefs:function(){
      this.output = this.$refs.input.value; // this.$refs will return all ref
    }
  }
});
