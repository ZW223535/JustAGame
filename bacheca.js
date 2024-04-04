let img;

function preload() {
  img = loadImage("assets/BachecaBG.png");
}

function setup() {
  createCanvas(windowWidth, img.height);
}

function draw() {
  background(img);
}
