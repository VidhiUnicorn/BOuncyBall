class Ground {
    constructor (x,y,width,height){
        var props ={
            isStatic : true

        }
        
        
        this.ground = Bodies.rectangle(x,y,width,height,props);
        World.add(world,this.ground);
        this.width = width;
        this.height = height;
    }

     display (){
       push ();
        fill ("blue")
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
        pop ();
    }
}