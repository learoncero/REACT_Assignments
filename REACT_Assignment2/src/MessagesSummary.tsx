import { Message } from "./App";

type Props = {
  messages: Array<Message>;
};

export default function MessagesSummary({ messages }: Props) {
  const unreadMessages = messages.filter((message) => !message.read);

  return (
    <>
      {unreadMessages.length === 1 ? (
        <p>You have one unread message.</p>
      ) : (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </>
  );
}
