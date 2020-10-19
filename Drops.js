class Drop {
    constructor(x, y) {

        var options ={
            //'restitution':0.4,
            'friction':0.1,
            //'density':1.0
        }
        this.r=2;
        
        
        this.body = Bodies.circle(x,y,this.r,options);   
        this.body.position.x=x;
        this.body.position.y=y;    
        //this.body = Bodies.circle(x,y,this.r);
        this.color=color(0,25,255);
        World.add(world, this.body);

    }
    update(){
        //this.body.position.y++
        if (this.body.position.y < 0){
            this.body.position.y = 0;
        }
        if (this.body.position.y > 850){
           // Matter.body.setPosition(this.body,{x:random(0,400),y:(0,400)})
            //this.body.position.x = random(0,400);
            //this.body.position.y = 0;
            this.body.position.y = random(0,400);
          // this.y = random(0,400)
          // this.x = random(0,400)
        }
      //  if (this.body.position.x < 0){
      //      this.body.position.x = 0
      //  }
        if (this.body.position.x < 0||this.body.position.x > 400){
            this.body.position.x = random(0,400);
        }
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        
        //this.velocity
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

        
        
    }
  
}
