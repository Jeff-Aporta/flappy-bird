/**
 * @fileoverview Punto/vector 2D — sin dependencias de p5 ni canvas.
 */
class Vec2 {
  /** @param {number} [x] @param {number} [y] */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /** @param {{ x: number, y: number } | Vec2} v */
  static from(v) {
    return new Vec2(v.x, v.y);
  }

  clone() {
    return new Vec2(this.x, this.y);
  }

  /** @param {Vec2 | { x: number, y: number }} v */
  add(v) {
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  /** @param {number} dx @param {number} dy */
  addXY(dx, dy) {
    return new Vec2(this.x + dx, this.y + dy);
  }

  /** @param {Vec2 | { x: number, y: number }} v */
  dist(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.hypot(dx, dy);
  }

  distSq(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
}


/**
 * @fileoverview Rectángulo alineado a ejes (AABB) para hitboxes y colisiones.
 */
class Rectangle {
  /** @param {number} [x] @param {number} [y] @param {number} [w] @param {number} [h] */
  constructor(x = 0, y = 0, w = 0, h = 0) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  get left() { return this.x; }
  get right() { return this.x + this.w; }
  get top() { return this.y; }
  get bottom() { return this.y + this.h; }
  get centerX() { return this.x + this.w / 2; }
  get centerY() { return this.y + this.h / 2; }
  get area() { return this.w * this.h; }

  /** @returns {Vec2} */
  get center() {
    return new Vec2(this.centerX, this.centerY);
  }

  /** @returns {Vec2[]} esquinas en orden: sup-izq, sup-der, inf-izq, inf-der */
  get vertices() {
    return [
      new Vec2(this.left, this.top),
      new Vec2(this.right, this.top),
      new Vec2(this.left, this.bottom),
      new Vec2(this.right, this.bottom),
    ];
  }

  /** @param {number} dx @param {number} dy */
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    return this;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /** @param {number} w @param {number} h */
  resize(w, h) {
    this.w = w;
    this.h = h;
    return this;
  }

  /**
   * @param {number | Vec2 | { x: number, y: number }} x
   * @param {number} [y]
   */
  containsPoint(x, y) {
    if (typeof x === "object" && x !== null) {
      y = x.y;
      x = x.x;
    }
    return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
  }

  /** Intersección AABB (solapamiento de áreas). @param {Rectangle} other */
  intersects(other) {
    return (
      this.left < other.right &&
      other.left < this.right &&
      this.top < other.bottom &&
      other.top < this.bottom
    );
  }

  /** Caja envolvente mínima que contiene ambos rectángulos. @param {Rectangle} other */
  union(other) {
    const left = Math.min(this.left, other.left);
    const top = Math.min(this.top, other.top);
    const right = Math.max(this.right, other.right);
    const bottom = Math.max(this.bottom, other.bottom);
    return new Rectangle(left, top, right - left, bottom - top);
  }

  /** ¿Toca este rectángulo un segmento? (delegado en Segment). @param {Segment} seg */
  intersectsSegment(seg) {
    return seg.intersectsRect(this);
  }

  clone() {
    return new Rectangle(this.x, this.y, this.w, this.h);
  }
}


/**
 * @fileoverview Círculo para hitboxes y colisión círculo–rectángulo.
 */
class Circle {
  /** @param {number} x centro @param {number} y centro @param {number} diameter */
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.d = diameter;
  }

  get r() { return this.d / 2; }
  set r(value) { this.d = value * 2; }
  get diameter() { return this.d; }

  /** @returns {Vec2} */
  get center() {
    return new Vec2(this.x, this.y);
  }

  /** @param {number} dx @param {number} dy */
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    return this;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /** @param {number} diameter */
  resize(diameter) {
    this.d = diameter;
    return this;
  }

  setDiameter(diameter) {
    return this.resize(diameter);
  }

  /** Círculo → AABB circunscrito (cuadrado tight). @returns {Rectangle} */
  toRect() {
    return new Rectangle(this.x - this.r, this.y - this.r, this.d, this.d);
  }

  /** Alias del sketch circle2rectangle. */
  circle2rectangle() {
    return this.toRect();
  }

  /**
   * @param {number | Vec2 | { x: number, y: number }} x
   * @param {number} [y]
   */
  containsPoint(x, y) {
    if (typeof x === "object" && x !== null) {
      y = x.y;
      x = x.x;
    }
    const dx = x - this.x;
    const dy = y - this.y;
    return dx * dx + dy * dy <= this.r * this.r;
  }

  /**
   * Colisión círculo–AABB: punto más cercano en el rect al centro del círculo.
   * @param {Rectangle} rect
   */
  intersectsRect(rect) {
    const closestX = Math.max(rect.left, Math.min(this.x, rect.right));
    const closestY = Math.max(rect.top, Math.min(this.y, rect.bottom));
    const dx = this.x - closestX;
    const dy = this.y - closestY;
    return dx * dx + dy * dy <= this.r * this.r;
  }

  /** ¿Toca este círculo un segmento? (delegado en Segment). @param {Segment} seg */
  intersectsSegment(seg) {
    return seg.intersectsCircle(this);
  }

  clone() {
    return new Circle(this.x, this.y, this.d);
  }
}


/**
 * @fileoverview Segmento 2D (dos extremos) e intersecciones segmento–segmento,
 * segmento–círculo y segmento–rectángulo (AABB). Sin dependencias de p5 ni canvas.
 *
 * Algoritmos elegidos por coste (todos O(1)):
 *  - segmento–segmento: test de orientación (signos de producto cruz), SIN división
 *    para el booleano; forma paramétrica con 1 división solo para el punto de corte.
 *  - segmento–círculo: punto más cercano del segmento al centro (proyección + clamp)
 *    y comparación dist² ≤ r² (sin raíz). Misma idea que círculo–rect, generalizada.
 *  - segmento–rectángulo: recorte de Liang–Barsky (slabs), más barato que probar el
 *    segmento contra los 4 lados.
 */
class Segment {
  /** @param {number} [x1] @param {number} [y1] @param {number} [x2] @param {number} [y2] */
  constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  /** @param {{x:number,y:number}} a @param {{x:number,y:number}} b */
  static fromPoints(a, b) {
    return new Segment(a.x, a.y, b.x, b.y);
  }

  /** @returns {Vec2} extremo inicial */
  get a() { return new Vec2(this.x1, this.y1); }
  /** @returns {Vec2} extremo final */
  get b() { return new Vec2(this.x2, this.y2); }

  get dx() { return this.x2 - this.x1; }
  get dy() { return this.y2 - this.y1; }
  get lengthSq() { return this.dx * this.dx + this.dy * this.dy; }
  get length() { return Math.hypot(this.dx, this.dy); }

  /** @returns {Vec2} punto medio */
  get center() {
    return new Vec2((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
  }

  /** @param {number} dx @param {number} dy */
  move(dx, dy) {
    this.x1 += dx; this.y1 += dy;
    this.x2 += dx; this.y2 += dy;
    return this;
  }

  /**
   * Punto del segmento más cercano a P (proyección escalar con clamp a [0,1]).
   * @param {number | Vec2 | {x:number,y:number}} x
   * @param {number} [y]
   * @returns {Vec2}
   */
  closestPointTo(x, y) {
    if (typeof x === "object" && x !== null) {
      y = x.y;
      x = x.x;
    }
    const len2 = this.lengthSq;
    let t = 0;
    if (len2 > 0) {
      t = ((x - this.x1) * this.dx + (y - this.y1) * this.dy) / len2;
      if (t < 0) t = 0;
      else if (t > 1) t = 1;
    }
    return new Vec2(this.x1 + t * this.dx, this.y1 + t * this.dy);
  }

  /**
   * ¿Cruza este segmento con otro? Test de orientación (4 productos cruz, sin división).
   * Maneja también los casos colineales que se tocan.
   * @param {Segment} other
   * @returns {boolean}
   */
  intersectsSegment(other) {
    const ax = this.x1, ay = this.y1, bx = this.x2, by = this.y2;
    const cx = other.x1, cy = other.y1, dx = other.x2, dy = other.y2;
    const d1 = Segment._cross(cx, cy, dx, dy, ax, ay);
    const d2 = Segment._cross(cx, cy, dx, dy, bx, by);
    const d3 = Segment._cross(ax, ay, bx, by, cx, cy);
    const d4 = Segment._cross(ax, ay, bx, by, dx, dy);
    if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
        ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
      return true;
    }
    // colineales / extremos que se tocan
    if (d1 === 0 && Segment._onSeg(cx, cy, dx, dy, ax, ay)) return true;
    if (d2 === 0 && Segment._onSeg(cx, cy, dx, dy, bx, by)) return true;
    if (d3 === 0 && Segment._onSeg(ax, ay, bx, by, cx, cy)) return true;
    if (d4 === 0 && Segment._onSeg(ax, ay, bx, by, dx, dy)) return true;
    return false;
  }

  /**
   * Punto de corte con otro segmento (forma paramétrica, 1 división).
   * @param {Segment} other
   * @returns {Vec2 | null} punto, o null si no se cruzan (o son paralelos)
   */
  intersectionPoint(other) {
    const x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2;
    const x3 = other.x1, y3 = other.y1, x4 = other.x2, y4 = other.y2;
    const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denom === 0) return null; // paralelos o colineales
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denom;
    if (t < 0 || t > 1 || u < 0 || u > 1) return null;
    return new Vec2(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
  }

  /**
   * ¿Toca este segmento un círculo? Punto más cercano y dist² ≤ r² (sin raíz).
   * @param {Circle} circle
   * @returns {boolean}
   */
  intersectsCircle(circle) {
    const q = this.closestPointTo(circle.x, circle.y);
    const dx = circle.x - q.x;
    const dy = circle.y - q.y;
    return dx * dx + dy * dy <= circle.r * circle.r;
  }

  /**
   * ¿Toca este segmento un rectángulo (AABB)? Recorte de Liang–Barsky.
   * Devuelve true si cruza el borde o si queda dentro de la caja.
   * @param {Rectangle} rect
   * @returns {boolean}
   */
  intersectsRect(rect) {
    let t0 = 0, t1 = 1;
    const dx = this.dx, dy = this.dy;
    const p = [-dx, dx, -dy, dy];
    const q = [this.x1 - rect.left, rect.right - this.x1, this.y1 - rect.top, rect.bottom - this.y1];
    for (let i = 0; i < 4; i++) {
      if (p[i] === 0) {
        if (q[i] < 0) return false; // paralelo a la slab y fuera de ella
      } else {
        const r = q[i] / p[i];
        if (p[i] < 0) {
          if (r > t1) return false;
          if (r > t0) t0 = r;
        } else {
          if (r < t0) return false;
          if (r < t1) t1 = r;
        }
      }
    }
    return true;
  }

  clone() {
    return new Segment(this.x1, this.y1, this.x2, this.y2);
  }

  /** Producto cruz (orientación) de (b-a) × (c-a). >0 izq, <0 der, 0 colineal. */
  static _cross(ax, ay, bx, by, cx, cy) {
    return (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
  }

  /** ¿Está c (colineal con a-b) dentro de la caja del segmento a-b? */
  static _onSeg(ax, ay, bx, by, cx, cy) {
    return Math.min(ax, bx) <= cx && cx <= Math.max(ax, bx) &&
           Math.min(ay, by) <= cy && cy <= Math.max(ay, by);
  }
}


/**
 * Jeff Geometry — utilidades 2D para juegos y tutoriales.
 * Sin p5.js. UMD para navegador + export para bundlers.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.JeffGeometry = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return { Vec2, Circle, Rectangle, Segment };
});
