import { Message } from "./App";

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
        className={tabIndex === 0 ? "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" : "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
        onClick={() => onTabChange(0)}
      >
        Add Message
      </button>
      <button
        className={tabIndex === 1 ? "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" : "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
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
