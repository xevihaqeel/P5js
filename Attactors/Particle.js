function Particle(x, y, r, pos) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(x, y);
  }
  //SIZE. Not necessary, working on it for mitosis
  this.r = r || 12;
  this.img;
  this.img = loadImage("IMG_1136.jpg");
  this.prev = createVector(x, y);
  this.vel = p5.Vector.random3D(); //createVector(0, 1);
  //this.vel = createVector(); 
  //this.vel.setMag(random(2, 5));
  this.acc = createVector();
  //for color change
  this.osc = 0;
  this.osc1 = 5;
  //for removal 
  this.lifetime = 400;
  this.speed = 7;
  this.speed1 = 4;
  //creates empty array for the sake of saving locations
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    //for color change
    this.osc += this.speed;
    if (this.osc > 256) {
      this.speed *= -1;
    } else if (this.osc <= 0) {
      this.speed *= -1;
    }
    //for alpha change
    this.osc1 += this.speed1;
    if (this.osc > 50) {
      this.speed1 *= -1;
    } else if (this.osc1 <= 5) {
      this.speed1 *= -1;
    }
    // this.lifetime--;
  }
  this.show = function() {
    // strokeWeight(1);
    // stroke(this.osc, 100, this.osc / 2, this.osc1);
    //point(this.pos.x, this.pos.y);
    // line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    //   this.prev.x = this.pos.x;
    //   this.prev.y = this.pos.y;
    push();
    translate(this.pos.x, this.pos.y);
    //fill(this.osc, 100, this.osc / 2);
    rotateY(-0.03 * frameCount);
    //texture(this.img)
    sphere(this.r);
    pop();
    //stroke(this.pos.x % 256, 100, this.pos.y % 256);
    //stroke(osc,100,osc); 
    // push();
    // noFill();
    // fill(this.osc, 100, this.osc / 2);
    // rect(this.pos.x, this.pos.y, 10, 10);
    // pop();
    // push();
    // translate(this.pos.x, this.pos.y)
    // sphere(10);
    // pop()
    // var trail = 10;
    // var trailShrink = 2;
    // trail -= trailShrink;
    // if (trail <= 0) {
    //   trailShrink *= -1;
    // } else if (trail >= 11) {
    //   trailShrink *= -1;
    // }
  }

  this.attracted = function(target) {
      //direction = target - this.pos
      var dir = p5.Vector.sub(target, this.pos);
      //var dsquared = dir.magSq();
      var d = dir.mag();
      // dsquared = constrain(dsquared, 5, 50);
      d = constrain(d, 1, 25);
      var G = 50;
      //var magnitude = G / dsquared;
      var magnitude = G / (d * d);
      dir.setMag(magnitude);
      //repulsion
      if (d < 20) {
        dir.mult(-10);
      }
      this.acc.add(dir);
    }
    //for mitosis ****NOT WORKING YET***//
  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  this.mitosis = function() {
    var part = new Particle(this.pos, this.r / 2);
    return part;
  }
}