var engine, world
var gameState = "creation"
var level = 0
// level 0 = menu
// level 6 = won
// level 10 = credit
groundCollide = true
radius = 30
death = 0


function preload() {
	ballImg = loadImage("images/ball_Img.png")
	bg = loadImage("images/background.jpg")
    song = new Audio('Audio.mp3')
}

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 20)

	engine = Matter.Engine.create()
	world = engine.world

	img = createImg("images/back.png")
	img.position(width / 6, height / 8)
	img.style('width', '40px')

	button1 = createButton('1')
	button1.position(width / 8, height / 3 - 100)
	button1.style('background', '#fed8b1')
	button1.style('width', '50px')
	button1.style('height', '50px')
	button2 = createButton('2')
	button2.position(width / 8 + width / 6, height / 3 - 100)
	button2.style('background', '#90EE90')
	button2.style('width', '50px')
	button2.style('height', '50px')
	button3 = createButton('3')
	button3.position(width / 8 + 2 * width / 6, height / 3 - 100)
	button3.style('background', '#fed8b1')
	button3.style('width', '50px')
	button3.style('height', '50px')
	button4 = createButton('4')
	button4.position(width / 8 + 3 * width / 6, height / 3 - 100)
	button4.style('background', '#90EE90')
	button4.style('width', '50px')
	button4.style('height', '50px')
	button5 = createButton('5')
	button5.position(width / 8 + 4 * width / 6, height / 3 - 100)
	button5.style('background', '#fed8b1')
	button5.style('width', '50px')
	button5.style('height', '50px')
	crButton = createButton('CREDIT')
	crButton.position(width / 8, 2 * height / 3)
	crButton.style('background', '#90EE90')
	crButton.style('width', '150px')
	crButton.style('height', '50px')

	rButton = createButton(' ')
	rButton.position(width / 6, height / 8)
	rButton.style('background', '#90EE90')
	rButton.style('width', '50px')
	rButton.style('height', '50px')
	rButton.style('opacity', '0')

	Matter.Engine.run(engine)
}

function draw() {

	song.play()

	Matter.Engine.update(engine)
	background(bg)

	if (level == 0) {
		button1.show()
		button2.show()
		button3.show()
		button4.show()
		button5.show()
		crButton.show()

		button1.mousePressed(function () { level = 1, gameState = "creation" })
		button2.mousePressed(function () { level = 2, gameState = "creation" })
		button3.mousePressed(function () { level = 3, gameState = "creation" })
		button4.mousePressed(function () { level = 4, gameState = "creation" })
		button5.mousePressed(function () { level = 5, gameState = "creation" })
		crButton.mousePressed(function () { level = 10 })
	} else {
		button1.hide()
		button2.hide()
		button3.hide()
		button4.hide()
		button5.hide()
		crButton.hide()
		rButton.show()
		rButton.mousePressed(function () { level = 0 })

		movement()
		restart()
	}


	if (level == 1) {

		if (gameState == "creation") {
			Matter.World.clear(world)

			var options = { friction: 1.1, frictionAir: 0.02 }
			ball = Matter.Bodies.circle(200, 500, radius, options)
			Matter.World.add(world, ball)

			goal = new GOAL(1600, 700, 70)
			ground1 = new GROUND(200, 600, 270, 30)
			ground2 = new GROUND(700, 500, 400, 30)
			ground3 = new GROUND(1200, 400, 250, 30)
			ground4 = new GROUND(1400, 500, 100, 30)
			wall = new WALL(650, 450, 10, 50)
			collider = new COLLIDER(1600, 750, 70, 10)

			gameState = "play"
		}

		if (gameState == "play") {
			camera.position.x = ball.position.x
			camera.position.y = ball.position.y

			goal.display()
			collider.Win()
			wall.display()
			ground1.display()
			ground2.display()
			ground3.display()
			ground4.display()

			textSize(20)
			fill("black")
			stroke(1)
			text("Use Left/Right or A/D to move", 0, 400)
			text("Use Up or W  to jump", 400, 300)
			textSize(40)
			text("LEVEL : 1", 50, 250)
			textSize(20)
			text("Death : " + death, ball.position.x - width / 3, ball.position.y + height / 3)

			imageMode(CENTER)
			image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2)

			if (ball.position.x > 60 && ball.position.x < 350) {
				if (ball.position.y > 550 && ball.position.y < 590)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 490 && ball.position.x < 890) {
				if (ball.position.y > 450 && ball.position.y < 490)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1050 && ball.position.x < 1350) {
				if (ball.position.y > 350 && ball.position.y < 390)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1340 && ball.position.x < 1460) {
				if (ball.position.y > 450 && ball.position.y < 490)
					groundCollide = true
				else
					groundCollide = false
			}
			else
				groundCollide = false
		}
	}

	if (level === 2) {

		if (gameState == "creation") {
			Matter.World.clear(world)

			var options = { friction: 1.1, frictionAir: 0.02 }
			ball = Matter.Bodies.circle(200, 200, radius, options)
			Matter.World.add(world, ball)

			goal = new GOAL(2650, 500, 70)
			collider = new COLLIDER(2650, 550, 70, 10)
			wall = new WALL(2200, 300, 10, 130)
			ground = new GROUND(200, 350, 300, 30)
			ground1 = new GROUND(800, 450, 300, 30)
			ground2 = new GROUND(1250, 350, 300, 30)
			ground3 = new GROUND(1700, 500, 150, 30)
			ground4 = new GROUND(2050, 400, 400, 30)
			ground5 = new GROUND(2000, 270, 100, 30)
			ground6 = new GROUND(2350, 180, 400, 30)

			enemy1 = new ENEMY(830, 435, 70, 10)
			enemy1b = new ENEMY(810, 435, 70, 10)
			enemy1c = new ENEMY(850, 435, 70, 10)
			enemy2 = new ENEMY(2350, 165, 70, 10)
			enemy2b = new ENEMY(2330, 165, 70, 10)
			enemy2c = new ENEMY(2370, 165, 70, 10)

			gameState = "play"
		}

		if (gameState == "play") {
			camera.position.x = ball.position.x
			camera.position.y = ball.position.y

			goal.display()
			collider.Win()
			ground.display()
			ground1.display()
			ground2.display()
			ground3.display()
			ground4.display()
			ground5.display()
			ground6.display()
			wall.display()
			enemy1b.display()
			enemy1c.display()
			enemy2b.display()
			enemy2c.display()
			enemy2.Out()
			enemy1.Out()

			fill("black")
			stroke(1)
			textSize(40)
			text("LEVEL : 2", 50, 100)
			textSize(20)
			text("Use R to Restart", 100, 200)
			fill("RED")
			text("RED = Danger", 700, 300)
			textSize(20)
			text("Death : " + death, ball.position.x - width / 3, ball.position.y + height / 3)

			imageMode(CENTER)
			image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2)

			if (ball.position.x > 50 && ball.position.x < 350) {
				if (ball.position.y > 300 && ball.position.y < 340)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 650 && ball.position.x < 950) {
				if (ball.position.y > 400 && ball.position.y < 440)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1100 && ball.position.x < 1400) {
				if (ball.position.y > 300 && ball.position.y < 340)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1625 && ball.position.x < 1775) {
				if (ball.position.y > 450 && ball.position.y < 490)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1850 && ball.position.x < 2250) {
				if (ball.position.y > 350 && ball.position.y < 390)
					groundCollide = true
				else
					groundCollide = false
				if (ball.position.x > 1900 && ball.position.x < 2100) {
					if (ball.position.y > 220 && ball.position.y < 260)
						groundCollide = true
					else
						groundCollide = false
				}
				if (ball.position.x > 2150 && ball.position.x < 2550) {
					if (ball.position.y > 130 && ball.position.y < 170)
						groundCollide = true
					else
						groundCollide = false
				}
			}
			else if (ball.position.x > 2150 && ball.position.x < 2550) {
				if (ball.position.y > 130 && ball.position.y < 170)
					groundCollide = true
				else
					groundCollide = false
			}
			else
				groundCollide = false
		}

	}

	if (level === 3) {
		if (gameState == "creation") {
			Matter.World.clear(world)

			var options = { friction: 1.1, frictionAir: 0.02 }
			ball = Matter.Bodies.circle(200, 300, radius, options)
			Matter.World.add(world, ball)

			collider = new COLLIDER(200, 7050, 70, 10)
			goal = new GOAL(200, 7000, 70)

			gameState = "play"
		}

		if (gameState == "play") {
			groundCollide = false
			camera.position.x = ball.position.x
			camera.position.y = ball.position.y

			goal.display()
			collider.Win()

			fill("black")
			stroke(1)
			textSize(40)
			text("LEVEL : 3", 50, 100)
			text("Don't Move", 100, 500)
			text("Don't Move", 100, 3000)
			text("Belive me", 100, 5000)
			textSize(20)
			text("Death : " + death, ball.position.x - width / 3, ball.position.y + height / 3)

			imageMode(CENTER)
			image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2)
		}
	}

	if (level === 4) {
		if (gameState == "creation") {
			Matter.World.clear(world)

			var options = { friction: 1.1, frictionAir: 0.02 }
			ball = Matter.Bodies.circle(200, 300, radius, options)
			Matter.World.add(world, ball)

			collider = new COLLIDER(3200, 750, 70, 10)
			goal = new GOAL(3200, 700, 70)

			ground1 = new GROUND(300, 550, 300, 30)
			ground2 = new GROUND(670, 570, 30, 60)
			ground3 = new GROUND(670, 540, 70, 10)
			ground4 = new GROUND(900, 525, 30, 150)
			ground5 = new GROUND(900, 450, 70, 10)
			ground6 = new GROUND(1100, 490, 30, 220)
			ground7 = new GROUND(1100, 380, 70, 10)
			ground8 = new GROUND(1400, 525, 30, 150)
			ground9 = new GROUND(1400, 450, 70, 10)
			ground10 = new GROUND(1800, 600, 200, 30)
			box1 = new GROUND(2100, 550, 150, 150)
			box2 = new GROUND(2500, 550, 150, 150)
			box3 = new GROUND(2900, 550, 150, 150)
			enemy1 = new ENEMY(1100, 600, 1000, 10)

			gameState = "play"
		}

		if (gameState == "play") {
			camera.position.x = ball.position.x
			camera.position.y = ball.position.y

			ground1.display()
			ground2.display()
			ground3.display()
			ground4.display()
			ground5.display()
			ground6.display()
			ground7.display()
			ground8.display()
			ground9.display()
			ground10.display()
			box1.display()
			box2.display()
			box3.display()
			goal.display()
			collider.Win()
			enemy1.display()
			enemy1.Out()

			fill("black")
			stroke(1)
			textSize(40)
			text("LEVEL : 4", 150, 200)
			textSize(20)
			text("Death : " + death, ball.position.x - width / 3, ball.position.y + height / 3)

			imageMode(CENTER)
			image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2)

			if (ball.position.x > 150 && ball.position.x < 450) {
				if (ball.position.y > 500 && ball.position.y < 540)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 635 && ball.position.x < 705) {
				if (ball.position.y > 500 && ball.position.y < 530)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 865 && ball.position.x < 935) {
				if (ball.position.y > 410 && ball.position.y < 440)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1065 && ball.position.x < 1135) {
				if (ball.position.y > 340 && ball.position.y < 370)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1365 && ball.position.x < 1435) {
				if (ball.position.y > 410 && ball.position.y < 440)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 1600 && ball.position.x < 2000) {
				if (ball.position.y > 550 && ball.position.y < 590)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 2025 && ball.position.x < 2175) {
				if (ball.position.y > 430 && ball.position.y < 480)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 2425 && ball.position.x < 2575) {
				if (ball.position.y > 430 && ball.position.y < 480)
					groundCollide = true
				else
					groundCollide = false
			}
			else if (ball.position.x > 2825 && ball.position.x < 2975) {
				if (ball.position.y > 430 && ball.position.y < 480)
					groundCollide = true
				else
					groundCollide = false
			}
			else
				groundCollide = false
		}
	}

	if (level === 5) {

		if (gameState == "creation") {
			Matter.World.clear(world)

			var options = { friction: 1.1, frictionAir: 0.02 }
			ball = Matter.Bodies.circle(0, 500, radius, options)
			Matter.World.add(world, ball)

			ground1 = new GROUND(-200, 800, 30, 400)
			ground2 = new GROUND(170, 800, 30, 400)
			ground3 = new GROUND(-15, 600, 400, 30)

			ground4 = new GROUND(400, 500, 200, 30)
			ground5 = new GROUND(700, 400, 200, 30)
			ground6 = new GROUND(1000, 300, 200, 30)
			ground7 = new GROUND(1300, 200, 200, 30)

			ground8 = new GROUND(1100, 90, 200, 30)
			ground9 = new GROUND(900, 0, 200, 30)
			ground10 = new GROUND(700, -100, 200, 30)
			ground11 = new GROUND(500, -200, 200, 30)
			ground12 = new GROUND(300, -300, 200, 30)

			ground13 = new GROUND(-400, 500, 200, 30)
			ground14 = new GROUND(-700, 400, 200, 30)
			ground15 = new GROUND(-1000, 300, 200, 30)
			ground16 = new GROUND(-1300, 200, 200, 30)

			ground17 = new GROUND(-1100, 90, 200, 30)
			ground18 = new GROUND(-900, 0, 200, 30)
			ground19 = new GROUND(-700, -100, 200, 30)
			ground20 = new GROUND(-500, -200, 200, 30)
			ground21 = new GROUND(-300, -300, 200, 30)

			ground22 = new GROUND(-215, 1400, 200, 30)

			goal = new GOAL(-15, 1300, 70)
			collider = new COLLIDER(-15, 1350, 70, 10)

			gameState = "play"
		}

		if (gameState == "play") {
			camera.position.x = ball.position.x
			camera.position.y = ball.position.y

			ground1.display()
			ground2.display()
			ground3.display()
			ground4.display()
			ground5.display()
			ground6.display()
			ground7.display()
			ground8.display()
			ground9.display()
			ground10.display()
			ground11.display()
			ground12.display()
			ground13.display()
			ground14.display()
			ground15.display()
			ground16.display()
			ground17.display()
			ground18.display()
			ground19.display()
			ground20.display()
			ground21.display()
			ground22.display()

			goal.display()
			collider.Win()

			fill("black")
			stroke(1)
			textSize(40)
			text("LEVEL : 5", -115, 300)
			textSize(20)
			text("Death : " + death, ball.position.x - width / 3, ball.position.y + height / 3)
			textSize(15)
			text("Wrong Way", -50, -400)
			textSize(9)
			text("|", 192, 600)
			text("V", 190, 610)

			imageMode(CENTER)
			image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2)

			if (ball.position.y > 110) {

				if (ball.position.x > -215 && ball.position.x < 185) {
					if (ball.position.y > 550 && ball.position.y < 590)
						groundCollide = true
					else if (ball.position.y > 1350 && ball.position.y < 1390)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 300 && ball.position.x < 500) {
					if (ball.position.y > 450 && ball.position.y < 490)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 600 && ball.position.x < 800) {
					if (ball.position.y > 350 && ball.position.y < 390)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 900 && ball.position.x < 1100) {
					if (ball.position.y > 250 && ball.position.y < 290)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 1200 && ball.position.x < 1400) {
					if (ball.position.y > 150 && ball.position.y < 190)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -500 && ball.position.x < -300) {
					if (ball.position.y > 450 && ball.position.y < 490)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -800 && ball.position.x < -600) {
					if (ball.position.y > 350 && ball.position.y < 390)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -1100 && ball.position.x < -900) {
					if (ball.position.y > 250 && ball.position.y < 290)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -1400 && ball.position.x < -1200) {
					if (ball.position.y > 150 && ball.position.y < 190)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -315 && ball.position.x < -115) {
					if (ball.position.y > 1350 && ball.position.y < 1390)
						groundCollide = true
					else
						groundCollide = false
				} else
					groundCollide = false
			} else {
				if (ball.position.x > 1000 && ball.position.x < 1200) {
					if (ball.position.y > 40 && ball.position.y < 80)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 800 && ball.position.x < 1000) {
					if (ball.position.y > -50 && ball.position.y < -10)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 600 && ball.position.x < 800) {
					if (ball.position.y > -150 && ball.position.y < -110)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 400 && ball.position.x < 600) {
					if (ball.position.y > -250 && ball.position.y < -210)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > 200 && ball.position.x < 400) {
					if (ball.position.y > -350 && ball.position.y < -310)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -1200 && ball.position.x < -1000) {
					if (ball.position.y > 40 && ball.position.y < 80)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -1000 && ball.position.x < -800) {
					if (ball.position.y > -50 && ball.position.y < -10)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -800 && ball.position.x < -600) {
					if (ball.position.y > -150 && ball.position.y < -110)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -600 && ball.position.x < -400) {
					if (ball.position.y > -250 && ball.position.y < -210)
						groundCollide = true
					else
						groundCollide = false
				} else if (ball.position.x > -400 && ball.position.x < -200) {
					if (ball.position.y > -350 && ball.position.y < -310)
						groundCollide = true
					else
						groundCollide = false
				} else
					groundCollide = false
			}
		}
	}

	if (level == 6) {
		camera.position.x = width / 2
		camera.position.y = height / 2
		fill("YELLOW")
		textSize(50)
		text("          YOU   WON", width / 3, height / 3)
		text("           ¯/_(ツ)_/¯", width / 3, 2 * height / 3)
	}

	if (level == 10) {
		camera.position.x = width / 2
		camera.position.y = height / 2
		textSize(25)
		fill("black")
		text("                   CREDITS TO ", width / 3, height / 9 + 100)
		fill("white")
		textSize(50)
		text("PRATINAV GUPTA", width / 3, height / 3 + 100)
		fill("blue")
		text("    VIIDHYUTH", width / 3, 2 * height / 3 + 100)
	}

	drawSprites()
}

function movement() {
	if (keyDown("d") || keyDown("RIGHT_ARROW"))
		Matter.Body.applyForce(ball, ball.position, { x: 0.005, y: 0 })
	if (keyDown("a") || keyDown("LEFT_ARROW"))
		Matter.Body.applyForce(ball, ball.position, { x: -0.005, y: 0 })
	if ((keyWentDown("w") || keyWentDown("UP_ARROW")) && groundCollide == true)
		Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.1 })
}

function restart() {
	if (keyWentDown("r")) {
		level = level
		gameState = "creation"
		death++
	}
}