import Item from './Item';

export default class Bow implements Item {
  use(): string {
    return '활을 쏘다';
  }
}
