import { Message } from "./App";
import "./MessageListItem.css";

type Props = {
  message: Message;
  onMessageRead(): void;
};

export default function MessageListItem({ message, onMessageRead }: Props) {
  return (
    <>
      <li
        className={
          message.read
            ? "messageListItem-messageRead"
            : "messageListItem-messageUnread"
        }
        onClick={onMessageRead}
      >
        <strong>{message.subject}</strong>
        <p>{message.body}</p>
      </li>
      <hr />
    </>
  );
}
