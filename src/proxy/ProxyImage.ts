import Image from './Image';
import RealImage from './RealImage';

export default class ProxyImage implements Image {
  private image: RealImage = null;
  private domLayOut: HTMLDivElement = null;
  private domTitle: HTMLDivElement = null;

  constructor(
    private title: string,
    private url: string,
    private parent: Element
  ) {
    this.domLayOut = document.createElement('div');
    this.domLayOut.classList.add('layout');
    this.parent.append(this.domLayOut);

    this.domTitle = document.createElement('div');
    this.domTitle.classList.add('title-proxy');
    this.domTitle.innerHTML = `<span>${this.title}</span><br/><span>Click to load</span>`;
    this.domLayOut.append(this.domTitle);
  }
  append(): void {
    if (this.image) return;
    this.domLayOut.addEventListener('click', () => {
      this.domLayOut.style.border = 'none';
      this.domLayOut.innerHTML = '';
      this.image = new RealImage(this.title, this.url, this.domLayOut);
      this.image.append();
    });
  }
}
