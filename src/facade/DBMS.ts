import Row from './Row';

export default class DBMS {
  private db = new Map<string, Row>();

  constructor() {
    this.db.set('jane', new Row('jane', '1991-12-03', 'jane@naver.com'));
    this.db.set('good', new Row('good', '1992-12-03', 'good@naver.com'));
    this.db.set('fail', new Row('fail', '1993-12-03', 'fail@naver.com'));
  }

  query(name: string, callback: (row: Row) => void): void {
    setTimeout(() => {
      callback(this.db.get(name));
    }, 1500);
  }
}
