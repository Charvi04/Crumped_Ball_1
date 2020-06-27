class Line3 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(1000,410,20,200,options);
      this.x = 1000;
      this.y = 440;
      this.width = 20;
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };