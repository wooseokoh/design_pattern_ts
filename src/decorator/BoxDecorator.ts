import Decorator from './Decorator';
import Item from './item';

export default class BoxDecorator extends Decorator {
  getLinesCount(): number {
    return this.targetItem.getLinesCount() + 2;
  }
  getLength(i: number): number {
    return this.targetItem.getLength(i) + 2;
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2;
  }
  getString(i: number): string {
    const maxWidth = this.getMaxLength();
    if (i === 0 || i === this.getLinesCount() - 1) {
      return;
      `<span style='color:blue'>|</span>` +
        `${'-'.repeat(maxWidth - 2)}+</span>`;
    } else {
      return;
      `<span style='color:blue'>|</span>` +
        `${this.targetItem.getString(i - 1)}${'  '.repeat(
          maxWidth - this.getLength(i - 1)
        )}` +
        `<span style='color:blue'>|</span>`;
    }
  }
  constructor(targetItem: Item) {
    super(targetItem);
  }
}
