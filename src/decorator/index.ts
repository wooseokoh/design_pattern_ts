import BoxDecorator from './BoxDecorator';
import LineNumberDecorator from './LineNumberDecorator';
import SideDecorator from './SideDecorator';
import Strings from './Strings';

const strs = new Strings();
strs.add('Hello!!');
strs.add('English Sentences with Audio!!');
strs.add('Bilingual Sentence Pairs');
strs.add('English Sentences Focusing on Words and Their Word Families!!');

const domPre = document.querySelector('pre');
strs.print(domPre);

const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);

const d2 = new LineNumberDecorator(strs);
d2.print(domPre);

const d3 = new BoxDecorator(strs);
d3.print(domPre);
