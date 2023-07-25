var angle = 0;
var slider;

function setup() {

  createCanvas(800, 800, WEBGL);
  slider = createSlider(0, 50, 9);
}

function draw() {
  background(0, 255, 0);
  //ortho(); 
  translate(0, 50, -50);
  rotateX(-PI / 8);
  
  //directionLight

  rectMode(CENTER);
  var offset = 0;
  //var w = slider.value(); 
  var w = 50;
  for (var x = 0; x < width; x += w) {
    push();
    var a = angle + offset;
    var h = map(sin(a), -1, 1, 0, 100);
    //fill(255);
    //rect(0, 0, 10, h);
    //rect(x - width / 2+ w/2, 0, w-2, h);
    translate(x - width / 2, 0, 0);
    box(w, h, w);

    offset += 0.1;
    pop();

  }
  angle += 0.1;

}