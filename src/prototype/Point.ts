import Prototype from './Prototype';
import Shape from './Shape';

export default class Point implements Prototype, Shape {
  constructor(private x: number, private y: number) {}

  draw(canvas: HTMLCanvasElement): this {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(this.x, this.y, 4, 0, 2 * Math.PI);
    context.fill();
    return this;
  }
  moveOffset(dx: number, dy: number): this {
    this.x += dx;
    this.y += dy;
    return this;
  }
  copy(): this {
    const result = new Point(this.x, this.y);
    return result as this;
  }

  setY(v: number) {
    this.x = v;
    return this;
  }

  setX(v: number) {
    this.y = v;
    return this;
  }

  getY() {
    return this.y;
  }

  getX() {
    return this.x;
  }
}
