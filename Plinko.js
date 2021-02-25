class Plinko{
    constructor(x,y,radius, options){
      var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,radius,options);
      World.add(world,this.body);
    }
    display()
    {
        rectMode(CENTER);
        fill(0)
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  