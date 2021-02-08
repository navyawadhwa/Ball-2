class Paper {
  constructor(x, y) {
    var options = {
        isStatic:false,
        restitution: 0.3,
        density: 1.2
    }

    this.body = Bodies.circle(x,y,30, options);
    World.add(world, this.body);
    this.image=loadImage("paper.png");
  }

display(){
  var pos =this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  //rectMode(CENTER);
  strokeWeight(2);
  stroke ("white");
  fill("blue");
  ellipse(0,0,40);
  //imageMode(CENTER);
  //image(this.image, 0, 0, this.width, this.height);
  //rect(0, 0, this.width, this.height);
  pop();
}
};