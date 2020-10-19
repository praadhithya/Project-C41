class Umbrella {
    constructor(x, y) {
           
        var options ={
            'restitution':0.4,
            'isStatic': true
        }
        this.image = loadImage("Images/walking_1.png");
        
        this.body = Bodies.circle(x,y,120,options); 
        //this.body = Bodies.circle(x,y,5);      
        this.color=color(0,25,255);
        World.add(world, this.body);
        
    }
    display() {
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;  
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 300, 300);
        pop();
    }
}
