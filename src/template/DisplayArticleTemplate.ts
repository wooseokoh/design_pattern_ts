import Article from './Article';

export default abstract class DisplayDisplayArticleTemplate {
  constructor(protected article: Article) {}

  public readonly displayHtml = () => {
    return `
        ${this.titleHtml()}
        ${this.contentHtml()}
        ${this.footerHtml()}
    `;
  };

  protected abstract titleHtml(): string;
  protected abstract contentHtml(): string;
  protected abstract footerHtml(): string;
}
