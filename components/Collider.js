AFRAME.registerComponent("flying-birds",{
    init:function(){
     for(var i=1;i<=20;i++){
        var id = `bird${i}`;
        
        var posx = Math.floor(Math.random()*3000+(-1000));
        var posy = Math.floor(Math.random()*2+(-1));
        var posz = Math.floor(Math.random()*3000+(-1000));

        var position = {x:posx,y:posy,z:posz};
        this.flyingbirds(id,position)
     }
    },
    flyingbirds:(id,position)=>{
      var terrainEl = document.querySelector("#terrain")
      var birdEl = document.createElement("a-entity")
     
      birdEl.setAttribute("id",id)
      birdEl.setAttribute("position",position)
      birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")

      birdEl.setAttribute("animation-mixer",{})
      terrainEl.appendChild(birdEl)
    }
})