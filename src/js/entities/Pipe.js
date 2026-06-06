/**
 * Tubo obstáculo con colisión rectangular.
 */
function Tubo() {
  const distanciaEntreTubos = CONFIG.DISTANCIA_ENTRE_TUBOS;

  this.w = 100;
  this.h = 600;
  this.x = width;
  const aleatoriedad = 300 * Math.random() - 150;
  this.y = (height / 2) + aleatoriedad;
  this.y2 = this.y - this.h - distanciaEntreTubos;

  img_tubo.resize(this.w, img_tubo.height * this.w / img_tubo.width);

  this.dibujar = function () {
    image(img_tubo, this.x, this.y);

    push();
    translate(this.x, this.y - distanciaEntreTubos);
    scale(1, -1);
    image(img_tubo, 0, 0);
    pop();

    if (caer) {
      this.x -= velocidad_suelo;
    }
  };

  this.areaColision = function () {
    return [
      new Rectangle(this.x, this.y, this.w, this.h),
      new Rectangle(this.x, this.y2, this.w, this.h),
    ];
  };
}
