export enum Action {
  UP = 1,
  DOWN,
  LEFT,
  RIGNT,
}

export class Memento {
  private _actions = new Array<Action>();
  get actions() {
    return this._actions;
  }

  constructor(private _x: number, private _y: number, actions: Array<Action>) {
    this._actions = structuredClone(actions);
    // this._actions = JSON.parse(JSON.stringify(actions)); 위와 동일
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
}

export default class BlindMen {
  private actions = new Array<Action>();
  constructor(
    private currentX: number,
    private currentY: number,
    private targetX: number,
    private targetY: number
  ) {}

  walk(action: Action): number {
    this.actions.push(action);
    if (action === Action.UP) this.currentY += 1;
    else if (action === Action.RIGNT) this.currentX += 1;
    else if (action === Action.DOWN) this.currentY -= 1;
    else if (action === Action.LEFT) this.currentX += 1;

    return Math.sqrt(
      Math.pow(this.currentX - this.targetX, 2) +
        Math.pow(this.currentY - this.targetY, 2)
    );
  }

  createMemento(): Memento {
    const memento = new Memento(this.currentX, this.currentX, this.actions);
    return memento;
  }

  restoreMemento(memento: Memento): void {
    this.currentX = memento.x;
    this.currentY = memento.y;
    this.actions = structuredClone(memento.actions);
  }

  resultPath(): string {
    return this.actions.map((action) => Action[action]).join('->');
  }
}
