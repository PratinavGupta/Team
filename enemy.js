class ENEMY {

    constructor(x, y, w, h) {
        var options = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y, w, h, options)
        this.body2 = Matter.Bodies.rectangle(x, y, w, h, options)
        this.width = w
        this.height = h

        this.width2 = w //+ w / 10
        this.height2 = 1.3 * h
        Matter.World.add(world, this.body)
    }

    display() {
        push()
        fill("RED")
        rectMode(CENTER)
        rect(this.body2.position.x, this.body2.position.y, this.width2, this.height2)
        pop()
    }

    Out() {
        if ((this.body.position.y + this.height / 2) > ball.position.y) {
            if ((this.body.position.y + this.height / 2) - ball.position.y < 50) {
                if (ball.position.x < this.body.position.x - this.width / 2) {
                    if (this.body.position.x - this.width / 2 - ball.position.x <= 40) {
                        death++
                        level = level
                        gameState = "creation"
                    }
                } else {
                    if (ball.position.x - this.body.position.x - this.width / 2 <= 40) {
                        death++
                        level = level
                        gameState = "creation"
                    }
                }
            }
        }




    }

}