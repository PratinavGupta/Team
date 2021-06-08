class GOAL {

    constructor(x, y, w) {
        var options = { isStatic: true };
        this.body = Matter.Bodies.rectangle(x, y, w, w, options);
        this.body2 = Matter.Bodies.rectangle(x - w / 2, y, w / 10, w, options);
        this.body3 = Matter.Bodies.rectangle(x + w / 2, y, w / 10, w, options);
        this.width = w;
        Matter.World.add(world, this.body2);
        Matter.World.add(world, this.body3);
    }

    display() {
        push()
        rectMode(CENTER);
        rect(this.body3.position.x, this.body3.position.y, this.width / 10, this.width);
        rect(this.body2.position.x, this.body2.position.y, this.width / 10, this.width);
        fill("yellow")
        rect(this.body.position.x, this.body.position.y, this.width, this.width);
        pop()
    }
}