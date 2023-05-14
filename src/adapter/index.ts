import Cat from './Cat';
import Tiger from './Tiger';
import Dog from './dog';
import Animal from './Animal';
import TigerAdapter from './TigerAdapter';

const list = Array<Animal>();

list.push(new Dog('제니'));
list.push(new Cat('댕댕'));

// const tiger = new Tiger();
// tiger.name = '타이거';
// list.push(tiger);

list.push(new TigerAdapter('타이거'));

list.forEach((animal) => {
  animal.sound();
});
