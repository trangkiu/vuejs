new Vue({
  el:"#vue-app",
  data:{
    health: 100,
    ended : false
  },
  methods:{
    punch: function(){
      this.health -= 10;
      if(this.health <= 0)
      this.ended= true;
    },
    restart: function(){
      this.health = 100;
      this.ended= false;
    }
  },
  computed:{

  }

});

let btn = document.getElementById("shot");
btn.addEventListener("click",function(){
  let snd = new Audio("shotgun.wav");
  snd.play();
});
