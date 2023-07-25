var osc = 0;
var speed = 20;
var spacer = 100;
var vid; 
var url; 
var button;
var canvas;  
var canvas2; 
var link; 
var cells = [];
var mWidth = displayWidth; 
var mHeight = displayHeight;
 
function setup() {
  canvas = createCanvas(displayWidth, displayHeight, WEBGL); 
  canvas.position(0,0); 
  canvas.style('z-index','-1');
  cells.push(new Cell()); 

}

function mousePressed() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].clicked(mouseX -= 400, mouseY -= 400)) {
      var cellA = cells[i].mitosis();
      var cellB = cells[i].mitosis();

      cells.push(cells[i].mitosis());
      cells[i].show();
      cells[i].update();
    }
  }
}
function draw() {

  // osc += speed;
  // if (osc >= 256) {
  //   speed *= -1;
  // } else if (osc <= 0) {
  //   speed *= -1;
  // }
  pointLight(222,182,151, mouseX, 200, -100);
  background(0);
  gridThing();
  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
    cells[i].update();
  }
  push(); 
  translate(0,0);
  sphere(50);
  pop();  

}


function gridThing() {

  for (var x = -width; x < width; x += (spacer*2)) {
    for (var y = -width; y < height; y += (spacer*2)) {
      for (var z = -width; z < 0; z += (spacer*2)) {

    
        push();
        //translate(sin(frameCount 0.03 + x) * 100, sin(frameCount * 0.03 + y) * 100, x * 0.03);
        translate(x, y, /*sin(frameCount*0.03+z)*100*/ z);
       // fill(x % 256, y % 256, z %256)
        rotateX(-0.03 * frameCount);
        rotateY(0.03 * frameCount);
       // ambientMaterial(250);
         box(spacer/6);
        pop();
      }
    }
  }
}

function Cell(pos, r) {
  this.osc = 0;
  this.speed = 7;

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

    push();
    //fill(osc / 2, osc / 4, osc);
    translate(this.pos.x, this.pos.y);
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
      }
}

