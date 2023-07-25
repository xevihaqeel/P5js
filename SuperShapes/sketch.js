// var slider;

var n1 = 4;
var n2 = 4;
var n3 = 4;
var m = 1;
var a = 1;
var b = 1;
var osc = 0;

var rc = 240;
var gc = 0;
var bc = 0;

function setup() {
  createCanvas(800, 800);
  // slider = createSlider(0, 10, 5, 1);
}

function supershape(theta) {
  var r = 100;
  var part1 = (1 / a) * cos(theta * m / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  var part2 = (1 / b) * sin(theta * m / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  var part3 = pow(part1 + part2, 1 / n1);
  if (part3 === 0) {
    
  }
  return r / part3;
}


function draw() {
  noCursor();

  stroke(rc, gc, bc);

  //**Sara's Eye Stroke**//
  stroke(231, 195, 173);
  gc = map(mouseX, 0, width, 0, 255);
  bc = map(mouseY, 0, height, 0, 255);
  strokeWeight(10);
  background(32, 89, 255);
  //**Sara'sEyeBG**//
  background(255);
  translate(width / 2, height / 2);


  //**shapecolor**//
  fill(gc, 255, bc);

  //**Sara's Eye Fill**//
  fill(95, 86, 80);
  // m = slider.value();
  m = map(sin(osc), -1, 1, 0, 10);
  n1 = map(cos(osc), -1, 1, 4, 8);
  n2 = map(sin(osc), -1, 1, 4, 8);
  n3 = map(tan(osc), -1, 1, 4, 8);
  osc += 0.01;

  var totalpts = 500;
  var increment = TWO_PI / totalpts;
  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += 0.01) {
    // var na = 2 / n;
    var r = supershape(angle);
    var x = r * cos(angle);
    var y = r * sin(angle);

    vertex(x, y);
  }
  endShape(CLOSE);
  ellipse(x, y, 60, 60);
}