// import Cache from './Cache';
// import DBMS from './DBMS';
// import Message from './Message';

import Facade from './Facade';

// const dbms = new DBMS();
// const cache = new Cache();

const domInput = document.querySelector('input');
const domButton = document.querySelector('button');
const domResult = document.querySelector('.result');

const facade = new Facade();

domButton.addEventListener('click', () => {
  const name = domInput.value;

  facade.queryName(
    name,
    () => {
      domInput.value = '조회중';
      domButton.disabled = true;
    },
    () => {
      domInput.value = name;
      domButton.disabled = false;
    },
    domResult
  );

  //   const row = cache.get(name);

  //   if (!row) {
  //     domInput.value = '조회중';
  //     domButton.disabled = true;

  //     dbms.query(name, (row) => {
  //       domInput.value = name;
  //       domButton.disabled = false;

  //       if (row) {
  //         cache.put(row);
  //       }
  //       const message = new Message(row);
  //       message.print(domResult);
  //     });
  //   } else {
  //     const message = new Message(row);
  //     message.print(domResult);
  //   }
});
