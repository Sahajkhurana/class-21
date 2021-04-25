class Ball{
    constructor(x,y,radius){
        var object_options1 ={
            restitution:1.0,
            friction:0.8,
            density:1.0
        }
        this.x=x
        this.y=y
        this.radius=radius
    this.body=Bodies.circle(x,y,radius,object_options1)
       World.add(world,this.body) 
    }
    display(){
        push  ()
         translate (this.body.position.x,this.body.position.y)
         rotate (this.body.angle)
        ellipseMode (RADIUS)
        ellipse (0,0,this.radius,this.radius)
        pop ()
    }
}