
function Branch(parent, pos, dir) {
  this.pos = pos;
  this.parent = parent;
  this.dir = dir;
  this.origDir = this.dir.copy();
  this.count = 0;
  this.len = 5;
  this.g = 0;
  this.b = 0; 

  this.reset = function() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }


  this.next = function() {
    var nextDir = p5.Vector.mult(this.dir, this.len);
    var nextPos = p5.Vector.add(this.pos, nextDir);
    var nextBranch = new Branch(this, nextPos, this.dir.copy());
    return nextBranch;
  }

  this.show = function() {
    if (parent !== null) {
      //stroke(random(255),random(255),random(255));
       stroke(240, this.g, this.b);
    this.g+=4;
    if (this.g > 255) {
      this.g = 0;
    }
    this.b +=4;
    if (this.b > 255) {
      this.b = 0;
    }
      strokeWeight(random(2,10));
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
    }

  }
}