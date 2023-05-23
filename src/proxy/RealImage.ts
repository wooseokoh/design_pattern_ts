import Image from './Image';

export default class RealImage implements Image {
  private domLayOut: HTMLDivElement = null;
  private domTitle: HTMLDivElement = null;
  private domImage: HTMLImageElement = null;
  private domLoading: HTMLDivElement = null;

  constructor(
    private title: string,
    private url: string,
    private parent: Element
  ) {
    this.domLayOut = document.createElement('div');
    this.domLayOut.classList.add('layout');
    this.parent.append(this.domLayOut);

    this.domTitle = document.createElement('div');
    this.domTitle.classList.add('title');
    this.domTitle.innerHTML = this.title;
    this.domLayOut.append(this.domTitle);

    this.domLoading = document.createElement('div');
    this.domLoading.classList.add('loading');
    this.domLoading.innerHTML = 'Loading....';
  }

  append(): void {
    if (this.domImage) return;
    this.domImage = new Image();

    this.domLayOut.append(this.domLoading);
    this.domImage.src = this.url;

    this.domImage.onload = () => {
      setTimeout(() => {
        this.domLayOut.removeChild(this.domLoading);
        this.domLayOut.append(this.domImage);
      }, Math.random() * 5000 + 3000);
    };
  }
}
