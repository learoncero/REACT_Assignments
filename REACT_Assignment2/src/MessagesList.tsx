import { Message } from "./App";
import MessageListItem from "./MessageListItem";
import "./MessagesList.css";

type Props = {
  messages: Array<Message>;
  onMessageRead(id: number): void;
};

export default function MessagesList({ messages, onMessageRead }: Props) {
  return (
    <ul>
      {messages
        .slice() // copy the array before reversing it
        .reverse()
        .map((message) => (
          <MessageListItem
            key={message.id}
            message={message}
            onMessageRead={() => onMessageRead(message.id)}
          />
        ))}
    </ul>
  );
}
