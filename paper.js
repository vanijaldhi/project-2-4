class Paper {
  constructor(){
      var options={
          isStatic: false,
          restitution:0.3,
          friction: 0.5,
          density:1.2
      }
     this.body = Bodies.circle(100,670,50,50,options);
     World.add(world,this.body);
  }

    display(){
        var pos =this.body.position;
       
        push();
        translate(pos.x, pos.y);        
        ellipsMode(CENTER);
        fill("purple");
        rect(0, 0, this.width, this.height);
        pop();
    }
}