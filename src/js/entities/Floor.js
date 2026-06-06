/**
 * Suelo animado con scroll infinito.
 */
function Piso() {
  this.w = ancho_escenario;
  this.h = 140;
  this.x = 0;
  this.y = alto_escenario - this.h;
  this.desface = 0;

  img_piso.resize(img_piso.width * img_piso.height / this.h, this.h);

  this.dibujar = function () {
    if (caer) {
      this.desface -= velocidad_suelo;
    }
    if (-this.desface >= img_piso.width) {
      this.desface = 0;
    }
    for (let i = 0; i < (this.w / img_piso.width) + 1; i++) {
      image(
        img_piso,
        this.x + img_piso.width * i + this.desface,
        this.y
      );
    }
  };

  this.areaColision = function () {
    return new Rectangle(this.x, this.y, this.w, this.h);
  };
}
