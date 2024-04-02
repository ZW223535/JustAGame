let img;
let foglio;
let input, button, closeButton;
let domandaPass;
let domandaPass2;
let loadingOverlay;

function preload() {
  img = loadImage("assets/BG.jpeg");
  foglio = loadImage("assets/Paper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
  background(img);
  let scaledWidth = foglio.width;
  let scaledHeight = foglio.height * 0.8;
  let x = (windowWidth - scaledWidth) / 2;
  let y = (windowHeight - scaledHeight) / 2;

  // Draw paper image
  image(foglio, x, y, scaledWidth, scaledHeight);


  domandaPass = createP('PASSWORD:');
  domandaPass.position(250, 100);
  domandaPass.style('font-size', '30px');
  domandaPass.style('font-family', 'courier');

  domandaPass2 = createP('Lettera 1: N/A <br> Lettera 2: N/A <br> Lettera 3: Iniziale del nome del figlio di Adam <br> Lettera 4: Seconda lettera del nome del cane che Diafo incontra <br> <br> Nota: Tutto in maiuscolo');
  domandaPass2.position(250, 200);
  domandaPass2.style('font-size', '20px');
  domandaPass2.style('font-family', 'courier');
  domandaPass2.style('text-align', 'left');

   // Create input box
   input = createInput("");
   input.position(250, windowHeight / 2 + 30);
   input.class('custom-input');

    // Create submit button
  button = createButton("Invia");
  button.position(input.x + 350, input.y);
  button.mousePressed(Password);
  button.class('custom-button');

  // Create close button
  let centerX = windowWidth / 2;
  let closeButtonWidth = 80; // Adjust the width of the close button as needed

  closeButton = createButton("Chiudi");
  closeButton.position(centerX - closeButtonWidth / 2, windowHeight - windowHeight / 5);
  closeButton.mousePressed(closeInput);
  closeButton.class('custom-button');
}

function Password() {
  let pass = input.value();
  if (pass === "GAME") {
    window.open('CassaOpen.html','_self');
    wrongAnswerText.remove();
  } else {
    // Create wrong answer text
    wrongAnswerText = createP("*Risposta sbagliata, ritenta!");
    wrongAnswerText.position(input.x, input.y + 60); // Adjust position as needed
    wrongAnswerText.style("font-family", "courier");
  }
}

// Function to close input box, submit button, and wrong answer text
function closeInput() {
    window.open('Stargate2.html','_self')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

console.log();