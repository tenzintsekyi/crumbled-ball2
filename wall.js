class Wall {
    constructor (x,y,width, height){

        var options ={
            isStatic: true
        }

        this.width= width;
        this.height= height;

        this.body= Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        //var angle=this.body.angle;
    
        push();
        fill("blue")
        translate(pos.x,pos.y)
        rect(0,0,this.width,this.height)
        pop();
    }
}

