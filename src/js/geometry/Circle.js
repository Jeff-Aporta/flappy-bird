class Circle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  toRect() {
    return new Rectangle(
      this.x - this.r,
      this.y - this.r,
      this.d,
      this.d
    );
  }

  collideRect(rectangulo) {
    if (!rectangulo.collideRect(this.toRect())) {
      return false;
    }

    let vertices = [
      createVector(this.x, this.y + this.r),
      createVector(this.x, this.y - this.r),
      createVector(this.x + this.r, this.y),
      createVector(this.x - this.r, this.y),
    ];

    for (let i in vertices) {
      if (rectangulo.collidePoint(vertices[i])) {
        return true;
      }
    }

    vertices = rectangulo.vertices;
    for (let i in vertices) {
      if (this.collidePoint(vertices[i])) {
        return true;
      }
    }

    return false;
  }

  collideCircle(circulo) {
    const d = this.center.dist(circulo.center);
    const a = this.r + circulo.r;
    return d < a;
  }

  collidePoint(x, y) {
    let d;
    if (x instanceof p5.Vector) {
      d = this.center.dist(x);
    } else {
      d = this.center.dist(createVector(x, y));
    }
    return d < this.r;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  set center(centro) {
    this.x = centro.x;
    this.y = centro.y;
  }

  get center() {
    return createVector(this.x, this.y);
  }

  set r(r) {
    this.d = 2 * r;
  }

  get r() {
    return this.d / 2;
  }

  draw() {
    circle(this.x, this.y, this.d);
  }
}
