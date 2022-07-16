AFRAME.registerComponent("target-ring",{
  init:function(){
    for(var i=1;i<=20;i++){
        var id = `ring${i}`

        var posx = (Math.random()*3000+(-1000));
        var posy = (Math.random()*2+(-1));
        var posz = (Math.random()*3000+(-1000));

        var position = {x:posx,y:posy,z:posz};
        console.log(position)
        this.createRings(id,position)

    }
  },
  createRings: function(id,position){
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");
    
    ringEl.setAttribute("id",id);
    ringEl.setAttribute("positon",position)

    ringEl.setAttribute("material","color","#ff9100");
    ringEl.setAttribute("geometry",{
        primitive:"torus",
        radius:8
    })

    terrainEl.appendChild(ringEl)
  }
}
)