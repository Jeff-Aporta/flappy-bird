/** Game tuning and asset paths — single source of truth. */
const CONFIG = {
  CANVAS_WIDTH: 1280,
  CANVAS_HEIGHT: 720,
  SCROLL_SPEED: 5,
  PIPE_GAP: 150,
  SPAWN_INTERVAL: 400,
  GRAVITY: 0.2,
  FLAP_FORCE: -5,
  BIRD_RADIUS: 60,
  BIRD_HITBOX_INSET: 15,
  FLOOR_HEIGHT: 140,
  PIPE_WIDTH: 100,
  PIPE_HEIGHT: 600,
  ASSETS: {
    font: 'assets/fonts/font.ttf',
    floor: 'assets/images/base.png',
    background: 'assets/images/background-day.png',
    pipe: 'assets/images/pipe-green.png',
    bird: [
      'assets/images/yellowbird-downflap.png',
      'assets/images/yellowbird-midflap.png',
      'assets/images/yellowbird-upflap.png',
    ],
    audio: {
      hit: 'assets/audio/hit.ogg',
      point: 'assets/audio/point.ogg',
      wing: 'assets/audio/wing.ogg',
    },
  },
};
