function Spheres(x, y, z) {

  this.x = x;
  this.y = y;
  this.z = z;
  this.s = random(10, 30);
  this.s1 = random(20, 60);
  //this.yDir = random(5, 10);                               
  //this.xDir = random(-2, 2);
  this.xDir = random(5, 10);
  this.yDir = random(-5, -10);
  this.lifetime = 50;
  this.r = (map(0, 0, 800, 0, 255));
  this.g = (map(0, 0, 800, 0, 255));
  this.b = (map(0, 0, 800, 0, 255));




  this.display = function() {

    push();
    translate(this.x += this.xDir, this.y += this.yDir, z);
    rotateY(0.04 * frameCount);
    //rotateX(-0.04 * frameCount);
    sphere(this.s);
    pop();
  }
  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);

    if (this.lifetime < 0) {
      this.lifetime = 300;
    } else {
      this.lifetime = this.lifetime--;
    }
  }
}