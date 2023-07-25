function Cubes(x, y, z) {
var bat; 
bat = loadModel('assets/Bat.obj'); 

  this.x = x;
  this.y = y;
  this.z = z;
  this.s = 30;

  this.s1 = noise(30);
  this.yDir = random(5, 10);
  this.xDir = random(-2, 2);
  this.lifetime = 500;
  this.r = (map(0, 0, 800, 0, 255));
  this.g = (map(0, 0, 800, 0, 255));
  this.b = (map(0, 0, 800, 0, 255));

  this.display = function() {

    push();
    translate(this.x += this.xDir, this.y--, z);
    rotateY(0.04 * frameCount);
    rotateX(-0.04 * frameCount);
    //box(this.s);
    scale(3,3,3); 
    model(bat); 
    pop();
  };
  this.update = function() {

    this.x += random(-1,2); 
    this.y += random(-1,2);
    this.lifetime = this.lifetime - 1;
  };

}