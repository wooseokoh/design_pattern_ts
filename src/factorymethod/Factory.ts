import Item from './Item';

export type ItemName = 'sword' | 'shield' | 'bow';

export default abstract class Factory {
  protected abstract isCreatable(name: string): boolean;
  protected abstract createItem(name: string): Item;
  protected abstract postprocessItem(name: string): void;

  create(name: ItemName): Item {
    const bCreatable = this.isCreatable(name);
    if (bCreatable) {
      const item = this.createItem(name);
      this.postprocessItem(name);
      return item;
    }
    return null;
  }
}
