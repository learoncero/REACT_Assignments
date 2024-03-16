import { Message } from "./App";
import MessagesList from "./MessagesList";
import MessagesSummary from "./MessagesSummary";

type Props = {
  messages: Array<Message>;
  onMessageRead: (id: number) => void;
};

export default function MessagesView({ messages, onMessageRead }: Props) {
  return (
    <>
      {messages.length === 0 ? (
        <p>You have no messages.</p>
      ) : (
        <MessagesSummary messages={messages} />
      )}
      <MessagesList messages={messages} onMessageRead={onMessageRead} />
    </>
  );
}
