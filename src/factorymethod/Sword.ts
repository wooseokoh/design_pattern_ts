import Item from './Item';

export default class Sword implements Item {
  use(): string {
    return '칼로 베다';
  }
}
