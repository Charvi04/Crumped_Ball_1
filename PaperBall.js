class PaperBall {
    constructor(x,y,width,height) {
      var this_options = {
          isStatic: false,
          restitution:0.3,
          friction:1.0,
          density:1.2

      }

      this.body = Bodies.circle(100 , 300 , 5 ,this_options);
	World.add(world, this.body);
    }
    display(){
     
      fill("magenta");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,18,18);
      
      
    }
  };