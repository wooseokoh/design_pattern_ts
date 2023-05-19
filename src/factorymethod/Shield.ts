import Item from './Item';

export default class Shield implements Item {
  use(): string {
    return '방패로막다';
  }
}
