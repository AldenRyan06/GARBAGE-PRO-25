class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':10,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("bin.png");
    
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4)
      stroke("green")
      
  
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  