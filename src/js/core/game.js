/**
 * Lógica principal del juego Flappy Bird (p5.js).
 */

const ancho_escenario = CONFIG.ANCHO_ESCENARIO;
const alto_escenario = CONFIG.ALTO_ESCENARIO;
const velocidad_suelo = CONFIG.VELOCIDAD_SUELO;

let canvas;
let piso;
let pajaro;
let tubos = [];
let caer = false;
let puntos = 0;
let contadorFotogramas = 0;
let contador_clics = 0;

let font;
let audio_hit;
let audio_point;
let audio_wing;
let img_piso;
let img_fondo;
let img_tubo;
let img_pajaro;

function preload() {
  const { ASSETS } = CONFIG;
  font = loadFont(ASSETS.font);
  img_piso = loadImage(ASSETS.floor);
  img_tubo = loadImage(ASSETS.pipe);
  img_fondo = loadImage(ASSETS.background);
  img_pajaro = ASSETS.bird.map((path) => loadImage(path));

  audio_hit = new Audio(ASSETS.audio.hit);
  audio_point = new Audio(ASSETS.audio.point);
  audio_wing = {
    0: new Audio(ASSETS.audio.wing),
    1: new Audio(ASSETS.audio.wing),
    2: new Audio(ASSETS.audio.wing),
  };
}

function setup() {
  canvas = createCanvas(ancho_escenario, alto_escenario);
  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);
  strokeWeight(10);
  windowResized();
  piso = new Piso();
  pajaro = new Pajaro();
  img_fondo.resize(
    img_fondo.width * alto_escenario / img_fondo.height,
    alto_escenario
  );
}

function draw() {
  for (let i = 0; i < 4; i++) {
    image(img_fondo, img_fondo.width * i, 0);
  }

  for (const tubo of tubos) {
    tubo.dibujar();
  }

  piso.dibujar();
  pajaro.dibujar();

  if (contadorFotogramas * velocidad_suelo % CONFIG.SPAWNING_INTERVAL === 0) {
    tubos.push(new Tubo());
  }

  if (caer) {
    contadorFotogramas++;
  }

  if (tubos[puntos] && tubos[puntos].x - pajaro.pos.x < 0) {
    puntos++;
    audio_point.play();
  }

  stroke('black');
  fill('white');
  text(puntos, width / 2, 40);
}

function windowResized() {
  if (width < windowWidth) {
    return;
  }
  const escala = windowWidth / width;
  canvas.style('width', `${width * escala}px`);
  canvas.style('height', `${height * escala}px`);
}

function keyPressed() {
  clic();
}

function mouseReleased() {
  clic();
}

function clic() {
  if (caer) {
    pajaro.aceleracion.set(createVector(0, -5));
    audio_wing[contador_clics++ % 3].play();
  } else {
    pajaro.resetearVariables();
    caer = true;
    contadorFotogramas = 0;
    puntos = 0;
    tubos = [];
  }
}

function perder() {
  if (caer) {
    audio_hit.play();
  }
  caer = false;
}
