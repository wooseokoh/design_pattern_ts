import Builder from './Builder';
import Data from './Data';

export default class Director {
  constructor(protected builder: Builder) {}

  build() {
    return `${this.builder.head()}${this.builder.body()}${this.builder.foot()}`;
  }
}
