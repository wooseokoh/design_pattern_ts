export default abstract class Handler {
  protected nextHandler: Handler = null;
  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  protected abstract process(url: string): void;

  run(url: string): void {
    this.process(url);
    if (this.nextHandler) this.nextHandler.run(url);
  }

  protected displayResult(title: string, content: string): void {
    const domLayOut = document.createElement('div');
    const domTitle = document.createElement('div');
    const domContent = document.createElement('div');

    domLayOut.append(domTitle, domContent);

    domLayOut.classList.add('layout');
    domTitle.classList.add('title');
    domContent.classList.add('content');

    domTitle.innerHTML = title;
    domContent.innerHTML = content;

    const domTarget = document.querySelector('.result');
    domTarget.append(domLayOut);
  }
}
