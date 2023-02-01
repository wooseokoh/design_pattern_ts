import Aggregator from './Aggregator';
import ArrayIterator from './ArrayIterator';
import Item from './item';
import Iterator from './Iterator';

class Array implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  iterator(): Iterator<Item> {
    return new ArrayIterator(this);
  }

  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }
}

export default Array;
