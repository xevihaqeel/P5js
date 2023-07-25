var a = 0;

var sponge = [];

function setup() {
  createCanvas(400, 400, WEBGL);

  // An array of Box objects
  // Star with one
  var b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function mousePressed() {
  // Generate the next set of boxes
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    console.log(i);
    var newBoxes = b.generate();
    console.log(newBoxes);
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(51);
  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);
  // Show what you've got!
  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }
  a += 0.01;
}


function Box(x, y, z, r) {
  this.pos = createVector(x, y, z);
  this.r = r;

  this.generate = function() {
    var boxes = [];
    for (var x = -1; x < 2; x++) {
      for (var y = -1; y < 2; y++) {
        for (var z = -1; z < 2; z++) {
          var sum = abs(x) + abs(y) + abs(z);
          var newR = this.r / 3;
          if (sum > 1) {
            var b = new Box(this.pos.x + x * newR, this.pos.y + y * newR, this.pos.z + z * newR, newR);
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }

  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    stroke(255);
    noStroke();
    noFill();
    //fill(255);
    box(this.r);
    pop();
  }
}