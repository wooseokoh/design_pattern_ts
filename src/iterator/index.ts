import Array from './Array';
import Item from './item';

const items = [new Item('포카칩', 4500), new Item('자가비', 4500)];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();
  const domItem = document.createElement('div');
  domItem.innerHTML = `${item.name} : ${item.cost}원`;
  document.body.appendChild(domItem);
  domItem.classList.add('iterator-item');
}
