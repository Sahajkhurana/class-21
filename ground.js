class Ground{
    constructor(x,y,width,height){
        var object_options1 ={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    this.body=Bodies.rectangle(x,y,width,height,object_options1)
       World.add(world,this.body) 
    }
    display(){
        rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height); 
    }
}