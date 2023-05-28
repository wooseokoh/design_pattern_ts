import Builder from './Builder';
import Data from './Data';

export default class XMLBuilder extends Builder {
  head(): string {
    return '<?xml version="1.0" encoding="utf-8"?><DATA>';
  }
  body(): string {
    return `<Name>${this.data.name}</Name><Age>${this.data.age}</Age>`;
  }
  foot(): string {
    throw new Error('Method not implemented');
  }
  constructor(data: Data) {
    super(data);
  }
}
