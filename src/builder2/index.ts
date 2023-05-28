import Data from './Data';
import Director from './Director';
import JSONBuilder from './JSONBuilder';
import PlainTextBuilder from './PlainTextBuilder';
import XMLBuilder from './XMLBuilder';

const data = new Data('top', 25);

// const builder = new PlainTextBuilder(data);
// const builder = new JSONBuilder(data);
const builder = new XMLBuilder(data);

const director = new Director(builder);

const result = director.build();

console.log(result);
