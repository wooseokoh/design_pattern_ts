import Car from './Car';
import CarBuilder from './CarBuilder';

const car1 = new Car('v5', true, 'black', true, false);
car1.print();

const car2 = new CarBuilder().setColor('black').setAEB(false).build();

car2.print();
