import { Message } from "./App";

type Props = {
  message: Message;
  onMessageRead(): void;
};

export default function MessageListItem({ message, onMessageRead }: Props) {
  const commonClasses = "border-l-4 w-full text-left";

  return (
    <div>
      <li className="pb-3">
        <button
          className={
            message.read
              ? `${commonClasses} border-slate-300`
              : `${commonClasses} border-red-800 bg-slate-50`
          }
          type="button"
          onClick={onMessageRead}
        >
          <div className="px-5">
            <strong>{message.subject}</strong>
            <p>{message.body}</p>
          </div>
        </button>
      </li>
    </div>
  );
}
