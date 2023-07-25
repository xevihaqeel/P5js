function Cell(pos, r) {
  this.osc = 0;
  this.speed = 7;
this.vid;
  this.vid = createVideo(['GridTings 5_29_2017 3_20_19 PM.mp4']);
  this.vid.loop();
  this.vid.hide();
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(0, 0);
  }
  this.r = r || 100;
  this.vel = p5.Vector.random3D();
  this.acc = createVector();

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(8);
  }
  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  this.mitosis = function() {
    // var cellA = new Cell(this.pos, this.r / 2);
    // var cellB = new Cell(this.pos,this.r/2);
    var cell = new Cell(this.pos, this.r / 2);
    return cell;
  }
  this.move = function() {
    var vel = p5.Vector.random3D();
    this.pos.add(vel);
  }

  this.show = function() {
    // translate(this.pos.x, this.pos.y);
    // sphere(this.r);
    osc += speed;
    if (osc > 256) {
      speed *= -1;
    }
    if (osc <= 0) {
      speed *= -1;
    }
    push();
    fill(osc / 2, osc / 4, osc);
    translate(this.pos.x, this.pos.y);
    rotateY(45);
    texture(this.vid);
    //rotateZ(0.004 * frameCount);
     //ambientMaterial(250);
    sphere(this.r);
    pop();
    if (this.pos.x > width + this.r) {
      this.pos.x = -width
    } else if (this.pos.x < -width + this.r) {
      this.pos.x = width;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -height
    } else if (this.pos.y < -height + this.r) {
      this.pos.y = height;
    }
    //ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
}