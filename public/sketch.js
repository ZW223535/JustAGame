let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
  }; //curvy brackets to create an object

  clientSocket.emit("mouse", message);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 30);
}
