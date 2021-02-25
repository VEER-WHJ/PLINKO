class Particles{
    constructor(x,y, radius, options, color){
        var options ={ isStatic: false}
      
        this.body =  Bodies.circle(x,y, radius, color,options);
        World.add(world,this.body);
  }
  display(){
  this.body = Bodies.circle(x, y, this.r, options);
  this.color=color(random(0, 255), random(0, 255), random(0, 255))
  World.add(world, this.body)
  }
} 