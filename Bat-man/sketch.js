var bat;
var vid;

function preload() {
  vid = createVideo(["Exotic Jellyfish.mp4"]); 
  vid.hide(); 
  vid.loop(); 
}

function setup() {
  createCanvas(800, 800, WEBGL);
  bat = loadModel('assets/Bat.obj');
  colorMode(HSB); 
}

function draw() {
  // Yellow directional light from the left
  //directionalLight(254, 249, 79, -1, 0, 0);

  // pink spotlight from the front
  //pointLight(236, 111, 208, 0, 0, 300);
  background(84,0,75);
  //texture(vid);
  push();
  //translate(0, 0);
  rotateY(0.03 * frameCount);
  scale(10, 10, 10);
  model(bat);
  pop();

}