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
        <p className="px-10 py-5 font-medium">You have no messages.</p>
      ) : (
        <MessagesSummary messages={messages} />
      )}
      <MessagesList messages={messages} onMessageRead={onMessageRead} />
    </>
  );
}
