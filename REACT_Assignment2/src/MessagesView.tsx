import { Message } from "./App";
import MessagesList from "./MessagesList";

type Props = {
  messages: Array<Message>;
  onMessageRead: (id: number) => void;
};

export default function MessagesView({ messages, onMessageRead }: Props) {
  return <MessagesList messages={messages} onMessageRead={onMessageRead} />;
}
