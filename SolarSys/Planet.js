function Planet(r, d) {
  this.radius = r;
  this.angle = 0;
  this.distance = d;

  this.show = function() {
    ellipse(0, 0, radius * 2, radius * 2);
  }
}