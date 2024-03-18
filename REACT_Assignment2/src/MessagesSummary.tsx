import { Message } from "./App";

type Props = {
  messages: Array<Message>;
};

export default function MessagesSummary({ messages }: Props) {
  const unreadMessagesCount = messages.filter(
    (message) => !message.read
  ).length;

  return (
    <>
      {unreadMessagesCount === 1 ? (
        <p>You have one unread message.</p>
      ) : (
        <p>You have {unreadMessagesCount} unread messages.</p>
      )}
    </>
  );
}
