let img;
let foglio;
let tvtesto;
let tvtesto2;
let tvtesto3;
let tvtesto4;
let tvtesto5;
let placeholder1; //da cancellare poi
let tvtestofinale; //da cancellare poi
let currentPage = 1; // Track the current page
let youtubeVideo1;
let youtubeVideo2;
let youtubeVideo3;

function preload() {
  img = loadImage("assets/BG.png");
  foglio = loadImage("assets/Paper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
  let scaledWidth = foglio.width;
  let scaledHeight = foglio.height * 0.8;
  let x = (windowWidth - scaledWidth) / 2;
  let y = (windowHeight - scaledHeight) / 2;
  image(foglio, x, y, scaledWidth, scaledHeight);

  // Display initial page elements
  displayPage1();
}

function displayPage1() {
  tvtesto = createP("[Le registrazioni]");
  tvtesto.position(250, 100);
  tvtesto.style("font-size", "30px");
  tvtesto.style("font-family", "courier");

  tvtesto2 = createP(
    "Gli studenti del Polo Bonghi hanno raccontato le storie <br>dei loro parenti, famigliari, amici...<br><br> Ho recuperato i video e i documenti digitali che hanno creato al riguardo. <br> Sono racconti riguardo scelte di vita, grandi decisioni che hanno cambiato <br> il corso della loro esistenza..."
  );
  tvtesto2.position(250, 300);
  tvtesto2.style("font-size", "20px");
  tvtesto2.style("font-family", "courier");

  tvtesto3 = createP("1/3");
  tvtesto3.position(250, windowHeight - windowHeight / 5);
  tvtesto3.style("font-size", "20px");
  tvtesto3.style("font-family", "courier");

  let centerXtv = windowWidth - windowWidth / 6;
  let next1width = 80;

  next1 = createButton("⭢");
  next1.position(centerXtv - next1width / 2, windowHeight - windowHeight / 5);
  next1.mousePressed(nextPage1);
  next1.class("custom-button");
}

function nextPage1() {
  tvtesto.remove();
  tvtesto2.remove();
  tvtesto3.remove();
  next1.remove();

  // Embedded YouTube video 1
  youtubeVideo1 = createDiv(
    '<iframe width="355" height="200" src="https://www.youtube.com/embed/r58JSBurJ24?si=ujBTBnJOXaGdvUtv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  );
  youtubeVideo1.position(200, 100);

  // Embedded YouTube video 2
  youtubeVideo2 = createDiv(
    '<iframe width="355" height="200" src="https://www.youtube.com/embed/r58JSBurJ24?si=ujBTBnJOXaGdvUtv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  );
  youtubeVideo2.position(200, windowHeight / 2);

  youtubeVideo3 = createDiv(
    '<iframe width="355" height="200" src="https://www.youtube.com/embed/r58JSBurJ24?si=ujBTBnJOXaGdvUtv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  );
  youtubeVideo3.position(355 + 250, windowHeight / 2);

  // Creating elements for the second page
  tvtesto4 = createP("2/3");
  tvtesto4.position(250, windowHeight - windowHeight / 5);
  tvtesto4.style("font-size", "20px");
  tvtesto4.style("font-family", "courier");

  let centerXtv = windowWidth - windowWidth / 6;
  let next1width = 80;

  previous = createButton("⭠");
  previous.position(centerXtv - 200 / 2, windowHeight - windowHeight / 5);
  previous.mousePressed(prev);
  previous.class("custom-button");

  next2 = createButton("⭢");
  next2.position(centerXtv - next1width / 2, windowHeight - windowHeight / 5);
  next2.mousePressed(nextPage2);
  next2.class("custom-button");
}

function prev() {
  clearPage2();
  displayPage1();
}

function clearPage2() {
  if (tvtesto) tvtesto.remove();
  if (tvtesto2) tvtesto2.remove();
  if (tvtesto3) tvtesto3.remove();
  if (tvtesto4) tvtesto4.remove();
  if (youtubeVideo3) youtubeVideo3.remove();
  if (youtubeVideo2) youtubeVideo2.remove();
  if (youtubeVideo1) youtubeVideo1.remove();
  if (next1) next1.remove();
  if (next2) next2.remove();
  if (currentPage > 1 && previous) previous.remove(); // Check if previous exists and currentPage is not 1
}

function nextPage2() {
  clearPage2();

  tvtestofinale = createP(
    "...Ma non può essere solo questo ciò che accomuna e ha reso speciali <br> questi ragazzi, deve esserci altro..."
  );
  tvtestofinale.position(250, 300);
  tvtestofinale.style("font-size", "20px");
  tvtestofinale.style("font-family", "courier");

  tvtesto5 = createP("3/3");
  tvtesto5.position(250, windowHeight - windowHeight / 5);
  tvtesto5.style("font-size", "20px");
  tvtesto5.style("font-family", "courier");

  let centerXtv = windowWidth - windowWidth / 6;
  let next1width = 80;

  previous2 = createButton("⭠");
  previous2.position(centerXtv - 200 / 2, windowHeight - windowHeight / 5);
  previous2.mousePressed(prev2);
  previous2.class("custom-button");

  closebutton = createButton("Chiudi");
  closebutton.position(
    centerXtv - next1width / 2,
    windowHeight - windowHeight / 5
  );
  closebutton.mousePressed(closeit);
  closebutton.class("custom-button");
}

function prev2() {
  clearPage3();
  nextPage1();
}

function clearPage3() {
  if (tvtesto) tvtesto.remove();
  if (tvtesto2) tvtesto2.remove();
  if (tvtesto3) tvtesto3.remove();
  if (tvtesto4) tvtesto4.remove();
  if (tvtesto5) tvtesto5.remove();
  if (youtubeVideo3) youtubeVideo3.remove();
  if (youtubeVideo2) youtubeVideo2.remove();
  if (youtubeVideo1) youtubeVideo1.remove();
  if (tvtestofinale) tvtestofinale.remove();
  if (next1) next1.remove();
  if (next2) next2.remove();
  if (closebutton) closebutton.remove();
  if (currentPage > 2 && previous2) previous2.remove(); // Check if previous exists and currentPage is not 1
}

function closeit() {
  window.open("Stargate2.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*let videoAlpha, videoBeta, videoOmega, videoPinco, videoPallo;
let playButtonAlpha, playButtonBeta, playButtonOmega, playButtonPinco, playButtonPallo;
let thumbnailAlpha, thumbnailBeta, thumbnailOmega, thumbnailPinco, thumbnailPallo;

function setup() {
  createCanvas(600, 400);
  
  // Load videos
  videoAlpha = createVideo("Alpha.mp4");
  videoBeta = createVideo("Beta.mp4");
  videoOmega = createVideo("Omega.mp4");
  videoPinco = createVideo("Pinco.mp4");
  videoPallo = createVideo("Pallo.mp4");

  // Hide videos initially
  videoAlpha.hide();
  videoBeta.hide();
  videoOmega.hide();
  videoPinco.hide();
  videoPallo.hide();

  // Load thumbnails
  thumbnailAlpha = loadImage("Alpha_thumbnail.jpg");
  thumbnailBeta = loadImage("Beta_thumbnail.jpg");
  thumbnailOmega = loadImage("Omega_thumbnail.jpg");
  thumbnailPinco = loadImage("Pinco_thumbnail.jpg");
  thumbnailPallo = loadImage("Pallo_thumbnail.jpg");

  // Create play buttons
  playButtonAlpha = createButton("Play Alpha");
  playButtonBeta = createButton("Play Beta");
  playButtonOmega = createButton("Play Omega");
  playButtonPinco = createButton("Play Pinco");
  playButtonPallo = createButton("Play Pallo");

  // Position play buttons
  playButtonAlpha.position(10, 10);
  playButtonBeta.position(10, 60);
  playButtonOmega.position(10, 110);
  playButtonPinco.position(10, 160);
  playButtonPallo.position(10, 210);

  // Add mousePressed event handlers
  playButtonAlpha.mousePressed(playAlpha);
  playButtonBeta.mousePressed(playBeta);
  playButtonOmega.mousePressed(playOmega);
  playButtonPinco.mousePressed(playPinco);
  playButtonPallo.mousePressed(playPallo);
}

function draw() {
  background(220);
  // Display thumbnails
  image(thumbnailAlpha, 150, 10, 100, 50);
  image(thumbnailBeta, 150, 60, 100, 50);
  image(thumbnailOmega, 150, 110, 100, 50);
  image(thumbnailPinco, 150, 160, 100, 50);
  image(thumbnailPallo, 150, 210, 100, 50);
}

function playAlpha() {
  stopAllVideos();
  videoAlpha.show();
  videoAlpha.loop();
}

function playBeta() {
  stopAllVideos();
  videoBeta.show();
  videoBeta.loop();
}

function playOmega() {
  stopAllVideos();
  videoOmega.show();
  videoOmega.loop();
}

function playPinco() {
  stopAllVideos();
  videoPinco.show();
  videoPinco.loop();
}

function playPallo() {
  stopAllVideos();
  videoPallo.show();
  videoPallo.loop();
}

function stopAllVideos() {
  videoAlpha.hide();
  videoAlpha.stop();
  videoBeta.hide();
  videoBeta.stop();
  videoOmega.hide();
  videoOmega.stop();
  videoPinco.hide();
  videoPinco.stop();
  videoPallo.hide();
  videoPallo.stop();
}
*/
