import King from './King';

const king = King.getInstance();
king.sayHello();

const king2 = King.getInstance();
if (king === king2) {
  console.log('같은놈');
} else {
  console.log('다른놈');
}
