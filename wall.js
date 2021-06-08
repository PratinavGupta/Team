

class WALL {

    constructor(x, y, w, h) {
        var options = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y, w, h, options)
        this.body2 = Matter.Bodies.rectangle(x, y, w, h, options)
        this.width2 = 2 * w
        this.height2 = 1.25* h
        Matter.World.add(world, this.body)
    }

    display() {
        push()
        fill("blue")
        rectMode(CENTER)
        rect(this.body2.position.x, this.body2.position.y, this.width2, this.height2)
        pop()
    }
}
