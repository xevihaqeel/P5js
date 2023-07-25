function Robot(x, y, z) {
  
  this.x = x; 
  this.y = y; 
  this.z = z; 
  this.display = function() {
    push();
    robo();
    pop();

  }

  this.move = function() {
    if (keyPressed) {
      if (key == CODED) {
        if (keyCode == RIGHT) {
          var addXSpeed = x += speed;
          x = x >= width ? -width : addXSpeed;
        } else if (keyCode == LEFT) {
          var subXSpeed = x -= speed;
          x = x < -width ? width : subXSpeed;
        } else if (keyCode == DOWN) {
          var addedSpeed = y += speed;
          y = y >= height ? -height : addedSpeed;
        } else if (keyCode == UP) {
          var subtractedSpeed = y -= speed;
          y = y < -height ? height : subtractedSpeed;
        }
      }
    } else {}
  }
}

this.robo = function() {
  fill(x % 256, y % 256, 100);
  //HEAD//

  push();
  translate(x, y - (s * 2));
  box(s * 1.5);
  pop();
  //HEAD//
  //NECK//
  push();
  translate(x, y - s);
  box(s);
  pop();
  //NECK//
  //****SHOULDERS***//
  //LEFT SHOULDER//
  push();
  translate(x - s, y);
  box(s);
  pop();
  //LEFT SHOULDER//

  //RIGHT SHOULDER//
  push();
  translate(x + s, y);
  box(s);
  pop();
  //RIGHT SHOULDER//
  //***SHOULDERS****//

  //***ARMS***//
  //LEFT ARM 
  push();
  translate(x - (s * 2), y + s);
  box(s);
  pop();
  push();
  translate(x - (s * 2), y + (s * 2));
  box(s);
  pop();
  //LEFT ARM 

  //RIGHT ARM 
  push();
  translate(x + (s * 2), y + s);
  box(s);
  pop();
  push();
  translate(x + (s * 2), y + (s * 2));
  box(s);
  pop();
  //RIGTH ARM 
  //***ARMS***//

  //***BODY***//
  //HEART//
  push();
  translate(x, y);
  rotateY(0.03 * frameCount);
  box(s);
  pop();
  //HEART//
  //TORSO
  push();
  translate(x, y + s);
  box(s);
  pop();
  push();
  translate(x, y + (s * 2));
  box(s);
  pop();
  push();
  translate(x, y + (s * 3));
  box(s);
  pop();
  //TORSO 
  //***BODY**//

  //***LEGS***//
  //LEFT LEG
  push();
  translate(x - s, y + (s * 4));
  box(s);
  pop();
  push();
  translate(x - s, y + (s * 5));
  box(s);
  pop();
  //LEFT LEG

  //RIGHT LEG
  push();
  translate(x + s, y + (s * 4));
  box(s);
  pop();
  push();
  translate(x + s, y + (s * 5));
  box(s);
  popMatrix();
}
}