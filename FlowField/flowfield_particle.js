function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2;
  this.g = 0;
  this.b = 0;
  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = (x + y) * cols;
    var force = vectors[index];
    this.applyForce(force);
  }
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.prevPos = this.pos.copy();
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(this.maxspeed);
    this.acc.mult(0);
  };



  this.show = function() {

    //stroke(240, this.g, this.b, 5);
    stroke(this.pos.y % 236,this.pos.x % 256,203);
    strokeWeight(1);
    // point(this.pos.x, this.pos.y);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    this.updatePrev();

  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();

    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();

    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();

    }

  }


}