let myColor;
let colors = ["red", "green", "blue", "yellow"];
let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

clientSocket.on("mouseBroadcast", otherMouse);

function otherMouse(dataReceived) {
  fill(dataReceived.color);
  circle(dataReceived.x, dataReceived.y, random(30, 50));
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
    color: myColor,
  }; //curvy brackets to create an object

  clientSocket.emit("mouse", message);
}

function setup() {
  createCanvas(400, 400);
  myColor = random(colors);
}

//myMouse
function draw() {
  fill(myColor);
  circle(mouseX, mouseY, 30);
}
