import Article from './Article';
import EditableDisplayArticle from './EditableDisplayArticle';
import SimpleDisplayArticle from './SimpleDisplayArticle';

const aritcle = new Article('업무', ['1', '2', '3', '4'], '개발자');
const display = new SimpleDisplayArticle(aritcle);
document.querySelector('.content').innerHTML = display.displayHtml();

document.querySelector('.edit-mode').addEventListener('change', (event) => {
  let display;
  if ((<HTMLInputElement>event.target).checked) {
    display = new EditableDisplayArticle(aritcle);
  } else {
    display = new SimpleDisplayArticle(aritcle);
  }
  document.querySelector('.content').innerHTML = display.displayHtml();
});
