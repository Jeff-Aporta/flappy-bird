/** p5.js lifecycle — orchestrates state, entities and input. */

const state = {
  playing: false,
  score: 0,
  ticks: 0,
  pipes: [],
  wingClicks: 0,
};

const assets = {};

let canvas;
let floor;
let bird;

function preload() {
  const { ASSETS } = CONFIG;
  assets.font = loadFont(ASSETS.font);
  assets.floor = loadImage(ASSETS.floor);
  assets.pipe = loadImage(ASSETS.pipe);
  assets.background = loadImage(ASSETS.background);
  assets.bird = ASSETS.bird.map((path) => loadImage(path));
  assets.sounds = {
    hit: new Audio(ASSETS.audio.hit),
    point: new Audio(ASSETS.audio.point),
    wing: [0, 1, 2].map(() => new Audio(ASSETS.audio.wing)),
  };
}

function setup() {
  canvas = createCanvas(CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
  textFont(assets.font);
  textSize(40);
  textAlign(CENTER, CENTER);
  strokeWeight(10);
  fitCanvasToWindow();
  assets.background.resize(
    assets.background.width * CONFIG.CANVAS_HEIGHT / assets.background.height,
    CONFIG.CANVAS_HEIGHT
  );
  floor = new Floor();
  bird = new Bird();
}

function draw() {
  _drawBackground();
  for (const pipe of state.pipes) pipe.render();
  floor.render();
  bird.render();

  if (state.playing && state.ticks % CONFIG.SPAWN_INTERVAL === 0) {
    state.pipes.push(new Pipe());
  }
  if (state.playing) {
    state.ticks++;
    _updateScore();
  }

  stroke('black');
  fill('white');
  text(state.score, width / 2, 40);
}

function _drawBackground() {
  const tileW = assets.background.width;
  for (let i = 0; i < 4; i++) {
    image(assets.background, tileW * i, 0);
  }
}

function _updateScore() {
  const next = state.pipes[state.score];
  if (next && next.x < bird.pos.x) {
    state.score++;
    assets.sounds.point.play();
  }
}

function windowResized() {
  fitCanvasToWindow();
}

function fitCanvasToWindow() {
  if (width >= windowWidth) return;
  const scale = windowWidth / width;
  canvas.style('width', `${width * scale}px`);
  canvas.style('height', `${height * scale}px`);
}

function keyPressed() {
  handleInput();
}

function mouseReleased() {
  handleInput();
}

function handleInput() {
  if (state.playing) {
    bird.flap();
    assets.sounds.wing[state.wingClicks++ % 3].play();
    return;
  }
  bird.reset();
  state.playing = true;
  state.ticks = 0;
  state.score = 0;
  state.pipes = [];
}

function endGame() {
  if (state.playing) {
    assets.sounds.hit.play();
  }
  state.playing = false;
}
