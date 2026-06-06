/**
 * Configuración global del escenario y rutas de assets.
 */
const CONFIG = {
  ANCHO_ESCENARIO: 1280,
  ALTO_ESCENARIO: 720,
  VELOCIDAD_SUELO: 5,
  DISTANCIA_ENTRE_TUBOS: 150,
  SPAWNING_INTERVAL: 400,
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
