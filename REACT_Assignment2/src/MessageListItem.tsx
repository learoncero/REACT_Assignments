import { Message } from "./App";

type Props = {
  message: Message;
  onMessageRead(): void;
};

export default function MessageListItem({ message, onMessageRead }: Props) {
  return (
    <div>
      <MessageListItem
        key={message.id}
        message={message}
        onMessageRead={() => onMessageRead()}
      />
    </div>
  );
}
