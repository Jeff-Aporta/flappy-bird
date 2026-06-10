/** Scrolling ground strip with lethal hitbox. */
class Floor {
  constructor() {
    this.width = CONFIG.CANVAS_WIDTH;
    this.height = CONFIG.FLOOR_HEIGHT;
    this.y = CONFIG.CANVAS_HEIGHT - this.height;
    this.offset = 0;
    assets.floor.resize(
      assets.floor.width * assets.floor.height / this.height,
      this.height
    );
  }

  render() {
    if (state.playing) {
      this.offset -= CONFIG.SCROLL_SPEED;
    }
    if (-this.offset >= assets.floor.width) {
      this.offset = 0;
    }
    const tiles = Math.ceil(this.width / assets.floor.width) + 1;
    for (let i = 0; i < tiles; i++) {
      image(assets.floor, assets.floor.width * i + this.offset, this.y);
    }
  }

  getHitbox() {
    return new Rectangle(0, this.y, this.width, this.height);
  }
}
