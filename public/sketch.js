let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

clientSocket.on("mouseBroadcast", otherMouse);
function otherMouse(dataReceived) {
  fill(0, 225);
  circle(dataReceived.x, dataReceived.y, random(30, 50));
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

//myMouse
function draw() {
  fill("yellow");
  circle(mouseX, mouseY, 30);
}
