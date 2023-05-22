import BlindMen, { Action, Memento } from './BlindMen';

const blindMen = new BlindMen(0, 0, 10, 10);

let minDistance = Number.MAX_VALUE;
let memento: Memento = null;

while (true) {
  const action: Action = Math.floor(Math.random() * 4) + 1;
  const distance = blindMen.walk(action);

  console.log(Action[action], distance);

  if (distance === 0.0) {
    console.log('도착');
  }

  if (minDistance > distance) {
    minDistance = distance;
    memento = blindMen.createMemento();
  } else {
    if (memento != null) {
      blindMen.restoreMemento(memento);
    }
  }
}

console.log(blindMen.resultPath());
