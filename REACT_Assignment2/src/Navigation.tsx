import AddMessageView from "./AddMessageView";
import { Message } from "./App";
import MessagesView from "./MessagesView";
import "./Navigation.css";

type Props = {
  messages: Array<Message>;
  tabIndex: number;
  onTabChange(tabIndex: number): void;
  onSubmit(subject: string, body: string): void;
  onMessageRead(id: number): void;
};

export default function Navigation({
  messages,
  tabIndex,
  onTabChange,
  onSubmit,
  onMessageRead,
}: Props) {
  const unreadMessagesCount = messages.filter(
    (message) => !message.read
  ).length;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td onClick={() => onTabChange(0)}>Add Message</td>
            <td onClick={() => onTabChange(1)}>
              Messages{" "}
              {unreadMessagesCount > 5
                ? "5+"
                : unreadMessagesCount !== 0
                ? "(" + unreadMessagesCount + ")"
                : null}
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      {tabIndex === 0 && <AddMessageView onSubmit={onSubmit} />}
      {tabIndex === 1 && (
        <MessagesView messages={messages} onMessageRead={onMessageRead} />
      )}
    </div>
  );
}
