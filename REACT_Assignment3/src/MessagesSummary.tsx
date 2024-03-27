import { useTranslations } from "use-intl";
import { Message } from "./App";

type Props = {
  messages: Array<Message>;
};

export default function UnreadMessagesSummary({ messages }: Props) {
  const unreadMessagesCount = messages.filter(
    (message) => !message.read
  ).length;

  const t = useTranslations("MessagesSummary");

  return (
    <div className="px-10 py-5 font-medium">
      <p>
        {t("summary", {
          unreadMessagesCount: unreadMessagesCount,
        })}
      </p>
    </div>
  );
}
