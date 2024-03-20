import { Message } from "./App";
import Navigation from "./Navigation";

type Props = {
  messages: Array<Message>;
  tabIndex: number;
  onTabChange(tabIndex: number): void;
};

export default function Header({ messages, tabIndex, onTabChange }: Props) {
  return (
    <div>
      <h1>Message Board</h1>
      <Navigation
        messages={messages}
        tabIndex={tabIndex}
        onTabChange={onTabChange}
      />
    </div>
  );
}
