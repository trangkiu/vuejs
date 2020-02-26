// component
// data in component must be a function and that function return object
Vue.component('greeting',{
  template:'<p>Hey there, I am reusable component, my boss is {{name}}.<button v-on:click="changeName">Change name</button></p>',
  data:function(){
    return {
      name:'kiu xinh oi la xinh'
    }
  },
  methods:{
    changeName:function(){
      this.name="kiu van xinh"
    }
  }
});

var one = new Vue ({
  el:'#vue-one',
  data:{
    title: "title from var 1 "
  },
  computed:{
    greeting:function(){
      return "hiiii from vue 1";
    }
  }

});

var two = new Vue ({
  el:'#vue-two',
  data:{
    title: "title from var 2 "
  },
  methods:{
    changeTitle:function(){
      one.title = "title changed";
    }
  },
  computed:{
    greeting:function(){
      return "hiiii from vue 2";
    }

  }

});

two.title = "change from outside";



























//
