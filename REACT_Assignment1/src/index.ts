import AddMessageForm from './AddMessageForm.js';
import MessageList from './MessageList.js';
import TabSwitcher from './TabSwitcher.js';

const listNode = document.getElementById('list') as HTMLUListElement;
const formNode = document.getElementById('form') as HTMLFormElement;
const addMessageButton = document.getElementById('addMessage') as HTMLButtonElement;
const messagesButton = document.getElementById('messages') as HTMLButtonElement;
const formDiv = document.getElementById('formDiv') as HTMLDivElement;
const listDiv = document.getElementById('listDiv') as HTMLDivElement;
const counterElement = document.getElementById('counter') as HTMLSpanElement;
const messagesTextElement = document.getElementById('messagesText') as HTMLParagraphElement;
const messageList = new MessageList(listNode, counterElement, messagesTextElement);
const tabSwitcher = new TabSwitcher(formNode, formDiv, listDiv);

addMessageButton.addEventListener('click', () => {
  tabSwitcher.switchToAddMessageTab();
});

messagesButton.addEventListener('click', () => {
  tabSwitcher.switchToMessageListTab();
});

new AddMessageForm(formNode, (subject, body) => {
  messageList.add(subject, body);
});
