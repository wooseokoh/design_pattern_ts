import Item from './item';

export default abstract class Decorator extends Item {
  constructor(protected targetItem: Item) {
    super();
  }
}
