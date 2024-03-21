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
      <h1 className=" bg-slate-50 text-slate-800 flex items-center text-5xl font-extrabold dark:text-white py-8 px-10">
        Message Board
      </h1>
      <Navigation
        messages={messages}
        tabIndex={tabIndex}
        onTabChange={onTabChange}
      />
    </div>
  );
}
