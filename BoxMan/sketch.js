var Robot = [];

function setup() {
  createCanvas(800, 800, WEBGL);
  // Robot = new Boxman();
}

function draw() {
  background(0);
  for (var i = 0; i < Robot.length; i++) {
    var Robot = Robot[i];
    Robot.display();
    Robot.move();
  }
}


function mousePressed() {
  if (mouseButton == LEFT) {
    Robot.push(new Robot(mouseX -= 400, mouseY -= 400, 0));
  }
}
//directionalLight(0, 0, 255, -mouseY, 0, -mouseX);
//pointLight(150, 100, 0, 500, 0, 200);


function Boxman(x, y, z) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(x, y, z);
  }
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.s = 20;
  this.speed = 7;
  this.display = function() {
    //fill(this.x % 256, this.y % 256, 100);
    //HEAD//
    push();
    translate(this.x, this.y - (this.s * 2));
    box(this.s * 1.5);
    pop();
    //HEAD//
    //NECK//
    push();
    translate(this.x, this.y - this.s);
    box(this.s);
    pop();
    //NECK//
    //****SHOULDERS***//
    //LEFT SHOULDER//
    push();
    translate(this.x - this.s, this.y);
    box(this.s);
    pop();
    //LEFT SHOULDER//

    //RIGHT SHOULDER//
    push();
    translate(this.x + this.s, this.y);
    box(this.s);
    pop();
    //RIGHT SHOULDER//
    //***SHOULDERS****//

    //***ARMS***//
    //LEFT ARM 
    push();
    translate(this.x - (this.s * 2), this.y + this.s);
    box(this.s);
    pop();
    push();
    translate(this.x - (this.s * 2), this.y + (this.s * 2));
    box(this.s);
    pop();
    //LEFT ARM 

    //RIGHT ARM 
    push();
    translate(this.x + (this.s * 2), this.y + this.s);
    box(this.s);
    pop();
    push();
    translate(this.x + (this.s * 2), this.y + (this.s * 2));
    box(this.s);
    pop();
    //RIGTH ARM 
    //***ARMS***//

    //***BODY***//
    //HEART//
    push();
    translate(this.x, this.y);
    rotateY(0.03 * frameCount);
    box(this.s);
    pop();
    //HEART//
    //TORSO
    push();
    translate(this.x, this.y + this.s);
    box(this.s);
    pop();
    push();
    translate(this.x, this.y + (this.s * 2));
    box(this.s);
    pop();
    push();
    translate(this.x, this.y + (this.s * 3));
    box(this.s);
    pop();
    //TORSO 
    //***BODY**//

    //***LEGS***//
    //LEFT LEG
    push();
    translate(this.x - this.s, this.y + (this.s * 4));
    box(this.s);
    pop();
    push();
    translate(this.x - this.s, this.y + (this.s * 5));
    box(this.s);
    pop();
    //LEFT LEG

    //RIGHT LEG
    push();
    translate(this.x + this.s, this.y + (this.s * 4));
    box(this.s);
    pop();
    push();
    translate(this.x + this.s, this.y + (this.s * 5));
    box(this.s);
    pop();

  }

  this.update = function() {}
  this.move = function() {
    if (keyIsPressed) {
      if (keyCode === RIGHT_ARROW) {
        var addXSpeed = this.x += this.speed;
        this.x = this.x >= width ? -width : addXSpeed;
      } else if (keyCode === LEFT_ARROW) {
        var subXSpeed = this.x -= this.speed;
        this.x = this.x < -width ? width : subXSpeed;
      } else if (keyCode === DOWN_ARROW) {
        var addYSpeed = this.y += this.speed;
        this.y = this.y >= height ? -height : addYSpeed;
      } else if (keyCode === UP_ARROW) {
        var subYSpeed = this.y -= this.speed;
        this.y = this.y < -height ? height : subYSpeed;
      }
    } else {}
  }
}