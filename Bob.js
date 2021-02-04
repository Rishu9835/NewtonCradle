class Bob{
   
    constructor(x,y,radius){

        var options={
            isStatic : false,
          restitution : 1,
          friction : 0,
          density : 0.7,
        }
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius
       World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
          

        ellipseMode(RADIUS);
        fill("blue");
        
        strokeWeight(1);
        ellipse(0,0,this.radius);
        pop();

    }
}