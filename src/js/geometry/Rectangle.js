class Rectangle {
  constructor(x = 0, y = 0, w = 0, h = 0) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  copy() {
    return new Rectangle(this.x, this.y, this.w, this.h);
  }

  collidePoint(x, y) {
    if (x instanceof p5.Vector) {
      y = x.y;
      x = x.x;
    }
    return x >= this.x && x <= this.x + this.w &&
      y >= this.y && y <= this.y + this.h;
  }

  collideRect(rectangle) {
    const rect1 = this;
    const rect2 = rectangle;

    return rect1.left < rect2.right &&
      rect2.left < rect1.right &&
      rect1.top < rect2.bottom &&
      rect2.top < rect1.bottom;
  }

  collideCircle(circulo) {
    return circulo.collideRect(this);
  }

  isInside(rectangulo) {
    return this.left > rectangulo.left &&
      this.top > rectangulo.top &&
      this.right < rectangulo.right &&
      this.bottom < rectangulo.bottom;
  }

  union(rectangle) {
    const x = min(this.topleft.x, rectangle.topleft.x);
    const y = min(this.topleft.y, rectangle.topleft.y);
    const w = max(this.bottomright.x, rectangle.bottomright.x) - x;
    const h = max(this.bottomright.y, rectangle.bottomright.y) - y;
    return new Rectangle(x, y, w, h);
  }

  intersect(rectangle) {
    if (!this.collideRect(rectangle)) {
      return new Rectangle();
    }

    const points = [];
    const vertices1 = this.vertices;
    const vertices2 = rectangle.vertices;

    for (let i in vertices1) {
      if (this.collidePoint(vertices2[i])) {
        points.push(vertices2[i]);
      }
      if (rectangle.collidePoint(vertices1[i])) {
        points.push(vertices1[i]);
      }
    }

    function generarRectangulo() {
      let x1 = Number.MAX_VALUE;
      let y1 = Number.MAX_VALUE;
      let x2 = Number.MIN_VALUE;
      let y2 = Number.MIN_VALUE;
      for (let i in points) {
        x1 = min(points[i].x, x1);
        y1 = min(points[i].y, y1);
        x2 = max(points[i].x, x2);
        y2 = max(points[i].y, y2);
      }
      return new Rectangle(x1, y1, x2 - x1, y2 - y1);
    }

    if (points.length >= 3) {
      return generarRectangulo();
    }

    function corteEntreVectores(a, b, c, d) {
      function proporciónDeChoque(a, b, c, d) {
        const V1 = b.copy().sub(a);
        const V2 = d.copy().sub(c);
        const V3 = a.copy().sub(c);

        function determinante(a, b) {
          return a.x * b.y - a.y * b.x;
        }
        return determinante(V2, V3) / determinante(V1, V2);
      }

      const t = proporciónDeChoque(a, b, c, d);
      const u = proporciónDeChoque(c, d, a, b);
      if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
        points.push(b.copy().sub(a).mult(t).add(a));
      }
    }

    corteEntreVectores(
      this.topleft, this.bottomleft,
      rectangle.topleft, rectangle.topright
    );
    corteEntreVectores(
      this.topleft, this.bottomleft,
      rectangle.bottomleft, rectangle.bottomright
    );
    corteEntreVectores(
      this.topright, this.bottomright,
      rectangle.topleft, rectangle.topright
    );
    corteEntreVectores(
      this.topright, this.bottomright,
      rectangle.bottomleft, rectangle.bottomright
    );

    return generarRectangulo();
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  resize(w, h) {
    this.w = w;
    this.h = h;
  }

  get pos() {
    return this.topleft;
  }

  get size() {
    return createVector(this.w, this.h);
  }

  get top() {
    return this.y;
  }

  get right() {
    return this.x + this.w;
  }

  get bottom() {
    return this.y + this.h;
  }

  get left() {
    return this.x;
  }

  get topleft() {
    return createVector(this.left, this.top);
  }

  get topright() {
    return createVector(this.right, this.top);
  }

  get bottomleft() {
    return createVector(this.left, this.bottom);
  }

  get bottomright() {
    return createVector(this.right, this.bottom);
  }

  get vertices() {
    return [
      this.topleft, this.topright,
      this.bottomleft, this.bottomright,
    ];
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }

  drawVertices() {
    for (let i in this.vertices) {
      point(this.vertices[i]);
    }
  }
}
