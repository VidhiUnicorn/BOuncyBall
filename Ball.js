class Ball {
    constructor (x,y,radius){
        var props ={
            isStatic : false,
            restitution:1,
            friction:0,
            density:1.2
    
        }
        
        
        this.ball = Bodies.circle(x,y,radius,props);
        World.add(world,this.ball);
        this.radius= radius;
        this.radius =radius;
    }

     displayB (){
       push ();
        fill ("lightgreen")
        ellipseMode(CENTER);
        circle(this.ball.position.x,this.ball.position.y,this.radius,this.radius)
        pop ();
    }
}