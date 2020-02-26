
new Vue({
  // specified which element will be control in this Vue object
  el:'#vue-app', // everything inside this Vue object only work inside id vue-app
  //data is where we store all data inside this vue instant , will be an object
  data:{
    name:'Trang',
    desc: 'awesome',
    age: 18,
    website:'https://www.google.com/',
    websiteTag:'<a href="https://www.udemy.com/"> The udemy website</a>',
    x : 0,
    y : 0
  },

  // we can add functions as well
  methods:{
    greet:function(){
      return 'Good morning';
    },
    greetData:function(time){
      // we can also access data from above here by using this keyword
      return "Good "+ time +" "+ this.name;
    },
    add:function(inc){
      this.age += inc;
    },
    subtract:function(dec){
      this.age -= dec;
    },

    updateXY:function(event){
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    click:function(){
      confirm ( "you are going to be redirect to youtube.com");
    }

    // logName:function(){
    //   console.log("you enter name");
    // },
    // logAge:function(){
    //   console.log("you enter age");
    // }

  }


});



new Vue({
  el :'#vue-event',
  data:{
    name:'',
    age:''
  },
  methods:{
    logName:function(){
      let name = document.getElementById('name1').value;
      console.log("you enter name : "+name);
      // update the name

    },
    logAge:function(){
      console.log("you enter age");
    }
  },
  computed:{
    // put method here if we one it run only when its call
    // computed properties can be call by name without ()
  }
});

new Vue({
  el:'#vue-css',
  data:{
    available:false,
    nearby: false
  },
  computed:{
    compClasses: function(){
      // will return an object
      return {
        available: this.available,
        nearby : this.nearby

      }
    }
  }
});

new Vue({
  el:'#vue-conditional',
  data:{
    error:false,
    sucess: false
  },
  computed:{

  }
});

new Vue({
  el:'#vue-loop',
  data:{
    characters:['kiu','mario','bros','pikachu'],
    ninjas: [
      {name: 'yay',age:10},
      {name: 'jinx',age:25},
      {name: 'yasuo',age:36}
    ]
  },
  methods:{

  },
  computed:{

  }
});
























//
