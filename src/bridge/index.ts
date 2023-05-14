import CaptionDisplay from './CaptionDisplay';
import CharactersCounter from './CharactersCounter';
import Draft from './Draft';
import SimpleDisplay from './SimpleDisplay';

const title = '우후후';
const author = '강냉이';
const content = ['가나다라', '가나다라', '가나다라'];

// const draft = new Draft(title, author, content);
const draft = new CharactersCounter(title, author, content);
const display = new SimpleDisplay();
// const display = new CaptionDisplay();
draft.print(display);

console.log(`전체 문자수 : ${draft.getCharactersCount()}`);
