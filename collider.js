class COLLIDER {

    constructor(x, y, w, h,) {
        var options = { isStatic: true };
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        Matter.World.add(world, this.body);
    }

    Win() {
        if (this.body.position.y > ball.position.y) {
            if (this.body.position.y - ball.position.y <= 50) {
                if (this.body.position.x > ball.position.x) {
                    if (this.body.position.x - ball.position.x <= 50) {
                        level++
                        gameState = "creation"
                    }
                } else {
                    if (ball.position.x - this.body.position.x <= 50) {
                        level++
                        gameState = "creation"
                    }
                }
            }
        }


    }//WIN close
    
}