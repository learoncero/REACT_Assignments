import { Message } from "./App";
import MessageListItem from "./MessageListItem";

type Props = {
  messages: Array<Message>;
  onMessageRead(id: number): void;
};

export default function MessagesList({ messages, onMessageRead }: Props) {
  const reversedMessages = messages.slice().reverse();
  return (
    <ul>
    {
        reversedMessages.map((message) => (
          <MessageListItem
            key={message.id}
            message={message}
            onMessageRead={() => onMessageRead(message.id)}
          />
        ))}
    </ul>
  );
}
