class Box{
    constructor(x,y,width,height){
        //properties
        var options={
            restitution:0.8
          }
         this.ball=Bodies.rectangle(x,y,width,height,options);
         World.add(myWorld,this.ball);
         this.width=width;
         this.height=height;
    }
    display(){//functions
    var pos=this.ball.position;
    var angle=this.ball.angle;
    push();
    translate (pos.x,pos.y);
    rotate (angle);
    angleMode (RADIANS)
    rectMode(CENTER);
    strokeWeight(5);
    stroke("red")
    fill ("orange")
    rect(0,0,this.width,this.height) ; 
    pop();
    }

}
    
    
