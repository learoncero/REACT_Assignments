import { Message } from "./App";
import MessageListItem from "./MessageListItem";

type Props = {
  messages: Array<Message>;
  onMessageRead(id: number): void;
};

export default function MessageList({ messages, onMessageRead }: Props) {
  return (
    <ul>
      {messages.map((message) => (
        <MessageListItem
          key={message.id}
          message={message}
          onMessageRead={() => onMessageRead(message.id)}
        />
      ))}
    </ul>
  );
}
