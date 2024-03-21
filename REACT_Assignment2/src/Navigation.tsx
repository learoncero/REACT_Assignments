import { Message } from "./App";
import "./Navigation.css";

type Props = {
  messages: Array<Message>;
  tabIndex: number;
  onTabChange(tabIndex: number): void;
};

export default function Navigation({ messages, tabIndex, onTabChange }: Props) {
  const unreadMessagesCount = messages.filter(
    (message) => !message.read
  ).length;

  return (
    <div>
      <button
        className={tabIndex === 0 ? "Navigation-tabActive" : "Navigation-tabInactive"}
        onClick={() => onTabChange(0)}
      >
        Add Message
      </button>
      <button
        className={tabIndex === 1 ? "Navigation-tabActive" : "Navigation-tabInactive"}
        onClick={() => onTabChange(1)}
      >
        Messages{" "}
        {unreadMessagesCount > 5
          ? "(5+)"
          : unreadMessagesCount !== 0
          ? "(" + unreadMessagesCount + ")"
          : null}
      </button>
    </div>
  );
}
