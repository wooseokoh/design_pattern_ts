import Row from './Row';

export default class Message {
  constructor(private row: Row) {}

  print(dom: Element) {
    const domLayOut = document.createElement('div');

    domLayOut.classList.add('layout');

    if (this.row) {
      domLayOut.innerHTML = `<div class="name">${this.row.name}</div>
      <div class="birthday">${this.row.birthday}</div>
      <div class="email">${this.row.email}</div>`;
    } else {
      domLayOut.innerHTML = `NO RESULT`;
    }

    dom.append(domLayOut);
  }
}
