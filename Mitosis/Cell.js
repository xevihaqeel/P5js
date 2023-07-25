function Cell(x, y) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.r = 100;
  this.maxspeed = 4;
  this.maxforce = 0.1;


  //this.c = (this.pos.x % 256, this.pos.y % 256, 0);

  this.move = function() {
    var vel = p5.Vector.random3D();
    this.pos.add(vel);
    this.vel.add(acc);
    this.vel.limit(maxspeed);
    this.acc.mult(0);

  }
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.seek = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    desired.normalized();
    desired.mult(maxspeed);
    var steer = p5.Vector.sub(desired, vel);
    steer.limit(this.maxforce);
    return steer;
    /*applyForce(steer)*/

  }
  this.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    desired.normalize();

    if (this.d < 100) {
      var m = map(this.d, 0, 100, 0, maxspeed);
      desired.mult(m);
    } else {
      desired.mult(maxspeed);
    }
    var steer = 
  }
}

this.display = function() {
  //fill(this.pos.x % 230, 200,100); 
  //fill(this.c);
  translate(this.pos.x, this.pos.y);
  sphere(this.r);
}


}