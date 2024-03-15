import { Message } from "./App";

type Props = {
  message: Message;
  onMessageRead(): void;
};

export default function MessageListItem({ message, onMessageRead }: Props) {
  return (
    <>
      <li>
        <h5>{message.subject}</h5>
        <p>{message.body}</p>
        {/* <button onClick={onMessageRead}>Mark as read</button> */}
      </li>
    </>
  );
}
