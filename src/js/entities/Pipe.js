/** Obstacle pair: bottom pipe + flipped top pipe. */
class Pipe {
  constructor() {
    this.width = CONFIG.PIPE_WIDTH;
    this.height = CONFIG.PIPE_HEIGHT;
    this.x = width;
    const gapCenter = height / 2 + random(-150, 150);
    this.bottomY = gapCenter;
    this.topY = gapCenter - this.height - CONFIG.PIPE_GAP;
    assets.pipe.resize(this.width, assets.pipe.height * this.width / assets.pipe.width);
  }

  render() {
    image(assets.pipe, this.x, this.bottomY);
    push();
    translate(this.x, this.bottomY - CONFIG.PIPE_GAP);
    scale(1, -1);
    image(assets.pipe, 0, 0);
    pop();

    if (state.playing) {
      this.x -= CONFIG.SCROLL_SPEED;
    }
  }

  getHitboxes() {
    return [
      new Rectangle(this.x, this.bottomY, this.width, this.height),
      new Rectangle(this.x, this.topY, this.width, this.height),
    ];
  }
}
