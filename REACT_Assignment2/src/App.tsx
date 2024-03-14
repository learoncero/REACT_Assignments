import { useState } from "react";
import MessageList from "./MessageList";
import AddMessageView from "./AddMessageView";
import Header from "./Header";

export type Message = {
  id: number;
  subject: string;
  body: string;
  read: boolean;
};

let messageID = 0;

export default function App() {
  const [messages, setMessages] = useState<Array<Message>>([]);
  // const [isAddMessageViewVisible, setAddMessageView] = useState(true);

  function onSubmit(subject: string, body: string) {
    const newMessage = {
      id: messageID++,
      subject: subject,
      body: body,
      read: false,
    };

    const newMessages = messages.concat(newMessage);

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

  return (
    <div>
      <Header />
      <AddMessageView onSubmit={onSubmit} />
      <MessageList messages={messages} onMessageRead={onMessageRead} />
    </div>
  );
}
