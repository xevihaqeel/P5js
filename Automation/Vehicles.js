function Vehicle(x, y) {
  this.loc = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(x, y);
  this.maxforce = 0.1;
  this.maxspeed = 4;

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.loc.add(this.velocity);
    this.acceleration.mult(0);

  }

  this.applyForce = function(force) {
    this.acceleration.add(force);

  }
  this.seek = function(target) {
    var desired = p5.Vector.sub(this.target, this.loc);
    desired.normalize();
    desired.mult(this.maxspeed);
    var steer = p5.Vector.sub(desired, velocity);
    steer.limit(maxforce);
    applyForce(steer);

  }
  this.display = function() {
    var theta = this.velocity.heading() + radians(90);
    push();
    translate(this.loc.y, this.loc.y);
    cone(50);
    pop();

  }
}