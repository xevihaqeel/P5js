
var img; 
var osc = 0;  
var s; 

function setup() {
  createCanvas(800,800,WEBGL); 
  img = loadImage("ArmsCollageTrace copy.png"); 
  imageMode(CENTER); 
  
}

function draw() {
  
  s = map(sin(noise(osc)), -1, 1, 50, 300);

  osc += 0.03; 
background(255);
texture(img); 
rotateY(sin(noise(frameCount*.03))); 
rotateX(cos(frameCount*-.04));
box(s); 

}