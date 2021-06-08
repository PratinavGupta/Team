class GROUND {
  constructor(x, y, w, h) {
    var options = { isStatic: true }
    this.body = Matter.Bodies.rectangle(x, y, w, h, options)
    this.body2 = Matter.Bodies.rectangle(x, y - 5, w, h, options)
    this.width = w
    this.height = h
    Matter.World.add(world, this.body);
  }

  display() {
    fill("green")
    rectMode(CENTER);
    rect(this.body2.position.x, this.body2.position.y, this.width, this.height);
  }
}