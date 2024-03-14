export default class MessageList {
  node: HTMLUListElement;
  counterElement: HTMLSpanElement;
  count: number;
  messagesTextElement: HTMLParagraphElement;

  constructor(node: HTMLUListElement, counterElement: HTMLSpanElement, messagesTextElement: HTMLParagraphElement) {
    this.node = node;
    this.counterElement = counterElement;
    this.count = 0;
    this.messagesTextElement = messagesTextElement;
  }

  add(subject: string, body: string) {
    const item = document.createElement('li');
    item.style.color = "red";
    item.innerHTML = `
        <strong>${subject}</strong>
        <br>
        ${body}
        <hr>
    `;

    const firstChild = this.node.firstChild;
    this.node.insertBefore(item, firstChild);
    this.count += 1;
    this.updateCounterElement();
    this.displayCorrectMessageText();

    // Concern 3: Change color item
    item.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.tagName === 'LI') {
        if (this.count > 0 && item.style.color == "red") {
          item.style.color = "black";
          this.count -= 1;
          this.updateCounterElement();
          this.displayCorrectMessageText();
        }
      }
    });
  }

  updateCounterElement() {
    if (this.counterElement) {
      if (this.count > 5) {
          this.counterElement.textContent = '(5+)';
      }
      else {
        this.counterElement.textContent = '(' + this.count.toString() + ')';
      }
    }
  }

  displayCorrectMessageText() {
    if (this.count === 1) {
      this.messagesTextElement.innerText = 'You have 1 unread message.'
    }
    else {
      this.messagesTextElement.innerText = 'You have ' + this.count + ' unread messages.'
    }
  }
}
