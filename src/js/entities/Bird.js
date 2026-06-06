/**
 * Pájaro controlado por el jugador con física básica y animación por frames.
 */
function Pajaro() {
  this.r = 60;

  this.resetearVariables = function () {
    this.pos = createVector(width / 2, height / 2);
    this.aceleracion = createVector(0, 0);
  };

  this.resetearVariables();

  for (const img of img_pajaro) {
    img.resize(this.r, img.height * this.r / img.width);
  }

  this.dibujar = function () {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.aceleracion.copy().add(5, 0).heading());
    const i = Math.floor(contadorFotogramas / velocidad_suelo) % img_pajaro.length;
    const img = img_pajaro[i];
    image(img, -img.width / 2, -img.height / 2);
    pop();

    if (caer) {
      this.aceleracion.add(createVector(0, 0.2));
      this.pos.add(this.aceleracion);
    }

    if (this.areaColision().collideRect(piso.areaColision())) {
      perder();
    }

    for (const tubo of tubos) {
      const colisiones = tubo.areaColision();
      for (const c of colisiones) {
        if (this.areaColision().collideRect(c)) {
          perder();
        }
      }
    }
  };

  this.areaColision = function () {
    return new Circle(this.pos.x, this.pos.y, this.r - 15);
  };
}
