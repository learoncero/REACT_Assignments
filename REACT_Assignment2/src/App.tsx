import { useState } from "react";
import Header from "./Header";
import AddMessageView from "./AddMessageView";
import MessagesView from "./MessagesView";

export type Message = {
  id: number;
  subject: string;
  body: string;
  read: boolean;
};

let messageID = 0;

export default function App() {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [tabIndex, setTabIndex] = useState(0);

  function onSubmit(subject: string, body: string) {
    const id = messageID++;

    const newMessages = messages.concat({
      id: id,
      subject: subject,
      body: body,
      read: false,
    });

    setMessages(newMessages);
  }

  function onMessageRead(id: number) {
    messages.map((message) => {
      if (message.id === id) {
        const newMessage = {
          id: message.id,
          subject: message.subject,
          body: message.body,
          read: true,
        };

        const messagesBefore = messages.slice(0, id);
        const messagesAfter = messages.slice(id + 1);
        const newMessages = messagesBefore.concat(newMessage, messagesAfter);
        setMessages(newMessages);
      }
    });
  }

  function onTabChange(tabIndex: number) {
    setTabIndex(tabIndex);
  }

  return (
    <div>
      <Header
        messages={messages}
        tabIndex={tabIndex}
        onTabChange={onTabChange}
      />
      <hr />
      {tabIndex === 0 && <AddMessageView onSubmit={onSubmit} />}
      {tabIndex === 1 && (
        <MessagesView messages={messages} onMessageRead={onMessageRead} />
      )}
    </div>
  );
}
