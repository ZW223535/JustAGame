let BG;
let articolo;
let videogiocando;
let backstage;
let chiudicassa;
let backstagehover;
let articolohover;
let videogiocandohover;
let backstagehovervis = false;
let articolohovervis = false;
let videogiocandohovervis = false;
let foglio;
let titolo;
let testo;
let showpaperbutton = false;
let paperbutton;
let showBackstage = true;
let showArticolo = true;
let showVideogiocando = true;
let showback = true;
let yt1;
let yt2;
let yt3;
let yt4;

function preload() {
 BG = loadImage("assets/cassaopen_ng.png");
 articolo = loadImage("assets/Articolo.png");
videogiocando = loadImage("assets/Videogiocando.png");
backstage = loadImage("assets/Backstage.png");
articolohover = loadImage("assets/Articolo_hover.png");
backstagehover = loadImage("assets/Backstage_hover.png");
videogiocandohover = loadImage("assets/Videogiocando_hover.png");
foglio = loadImage("assets/Paper.png")}

function setup() {
  createCanvas(windowWidth, windowHeight);
background(BG);
let centerXtv = windowWidth - windowWidth / 6;
let next1width = 80;

if (showback) {chiudicassa = createButton("Chiudi cassa");
chiudicassa.position(centerXtv - next1width / 2, windowHeight - windowHeight / 5);
chiudicassa.mousePressed(closeit);
chiudicassa.class('custom-button');
background(BG);}
}

function draw(){

   

    if (showBackstage) {if (
        mouseX > windowWidth / 5 &&
        mouseX < windowWidth / 5 + 404 && //larghezza
        mouseY > 52  &&
        mouseY < 50+ 350 // altezza
      ) {
        image(
          backstagehover,
          windowWidth / 5,
         52,
          404,
          350 
        );
        cursor(HAND); 
        backstagehovervis = true;
      } else {
        image(
          backstage,
          windowWidth / 5,
          52,
          404,
          350
        );
        backstagehovervis = false;
      }}
    
      if (showArticolo){if (
        mouseX >  windowWidth /2.5 &&
        mouseX < windowWidth /2.5 + 700 &&
        mouseY > windowHeight - 350 &&
        mouseY < windowHeight - 350 + 350
      ) {
        image(
          articolohover,
          windowWidth /2.5,
          windowHeight - 350,
          700,
          350
        );
        cursor(HAND); 
        articolohovervis = true;
      } else {
        image(
          articolo,
          windowWidth /2.5 ,
          windowHeight - 350,
          700,
          350
        );
        articolohovervis = false;
      }}

     if (showVideogiocando) {if (
        mouseX > windowWidth-windowWidth / 2.5 &&
        mouseX < windowWidth-windowWidth / 2.5 + 150 &&
        mouseY > 50 &&
        mouseY < 50 + 190
      ) {
        image(
          videogiocandohover,
          windowWidth- windowWidth / 2.5,
          50,
         150,
         190
        );
        cursor(HAND); 
        videogiocandohovervis = true;
      } else {
        image(
          videogiocando,
          windowWidth- windowWidth / 2.5,
         50,
         150,
        190
        );
        videogiocandohovervis = false;
      }
    
      if (!backstagehovervis && !articolohovervis && !videogiocandohovervis) {
        cursor(ARROW);
      }}

}


function mouseClicked() {

    if (
        mouseX > windowWidth / 5 &&
        mouseX < windowWidth / 5 + 404 && 
        mouseY > 52  &&
        mouseY < 50+ 350
    ) {
     showpaperbutton = true;
       showBackstage = false; // Hide backstage
       showArticolo = false; // Hide articolo
       showVideogiocando = false; // Hide videogiocando
       showback = false;

       let scaledWidth = foglio.width;
        let scaledHeight = foglio.height * 0.8;
        let x = (windowWidth - scaledWidth) / 2;
        let y = (windowHeight - scaledHeight) / 2;
      
        image(foglio, x, y, scaledWidth, scaledHeight);
      
        titolo = createP('[BACKSTAGE]');
        titolo.position(250, 100);
        titolo.style('font-size', '30px');
        titolo.style('font-family', 'courier');
               // Embedded YouTube video 1
yt1 = createDiv('<iframe width="355" height="200" src="https://www.youtube.com/embed/3vJbZdCR8uk?si=uNpIpdqzH1X3QRX6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
yt1.position(200, 200);

// Embedded YouTube video 2
 yt2 = createDiv('<iframe width="355" height="200" src="https://www.youtube.com/embed/flBHaSgm7LI?si=37g8z-CLFf03QFcq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
yt2.position(200, windowHeight/2);

 yt3 = createDiv('<iframe width="355" height="200" src="https://www.youtube.com/embed/-2X9tnd6N-U?si=z16GsDwnins6jkaO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
yt3.position(355 + 250, windowHeight/2);
 
   // Embedded YouTube video 2
    yt4 = createDiv('<iframe width="355" height="200" src="https://www.youtube.com/embed/kQoaoaYfvm8?si=KJvsAHuWHb_gNn9Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
   yt4.position(355 + 250, 200);

   let centerXtv = windowWidth - windowWidth / 6;
   let next1width = 80;
 
   paperbutton = createButton("Torna indietro");
   paperbutton.position(centerXtv - next1width / 2, windowHeight - windowHeight / 5);
   paperbutton.mousePressed(chiudifoglio);
   paperbutton.class('custom-button');
    }

    if (
        mouseX >  windowWidth /2.5 &&
        mouseX < windowWidth /2.5 + 700 &&
        mouseY > windowHeight - 350 &&
        mouseY < windowHeight - 350 + 350
    ) {
      window.open('CassaOpen.html','_self') //inserire articolo
    }
  
    if (
        mouseX > windowWidth-windowWidth / 2.5 &&
        mouseX < windowWidth-windowWidth / 2.5 + 150 &&
        mouseY > 50 &&
        mouseY < 50 + 190
    ) {
      window.open('https://www.fondazionepolitecnico.it/content/STARGATE-videogiocare-per-apprendere.html#/')  }
  }

  function chiudifoglio(){
    window.open('CassaOpen.html','_self')
  }

  function closeit(){
    window.open('Stargate2.html','_self')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

console.log();