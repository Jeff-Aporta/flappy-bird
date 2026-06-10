/** Player bird: physics, wing animation, collision checks. */
class Bird {
  constructor() {
    this.radius = CONFIG.BIRD_RADIUS;
    this.reset();
    for (const img of assets.bird) {
      img.resize(this.radius, img.height * this.radius / img.width);
    }
  }

  reset() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.copy().add(5, 0).heading());
    const frame = Math.floor(state.ticks / CONFIG.SCROLL_SPEED) % assets.bird.length;
    const sprite = assets.bird[frame];
    image(sprite, -sprite.width / 2, -sprite.height / 2);
    pop();

    if (state.playing) {
      this.vel.add(0, CONFIG.GRAVITY);
      this.pos.add(this.vel);
      this._checkCollisions();
    }
  }

  flap() {
    this.vel.set(0, CONFIG.FLAP_FORCE);
  }

  getHitbox() {
    const size = (this.radius - CONFIG.BIRD_HITBOX_INSET) * 2;
    return new Circle(this.pos.x, this.pos.y, size);
  }

  _checkCollisions() {
    const hitbox = this.getHitbox();
    if (hitbox.intersectsRect(floor.getHitbox())) {
      endGame();
      return;
    }
    for (const pipe of state.pipes) {
      for (const box of pipe.getHitboxes()) {
        if (hitbox.intersectsRect(box)) {
          endGame();
          return;
        }
      }
    }
  }
}
