export default abstract class Item {
  abstract getLinesCount(): number;
  abstract getLength(i: number): number;
  abstract getMaxLength(): number;
  abstract getString(i: number): string;

  print(dom: HTMLElement): void {
    const result = [];
    const cntLines = this.getLinesCount();
    for (let index = 0; index < cntLines; index++) {
      const element = this.getString(index);
      result.push(element);
    }
    dom.innerHTML = result.join('\n');
  }
}
