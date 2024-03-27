import { Message } from "./App";
import LocalePicker from "./LocalePicker";
import NavigationTab from "./NavigationTab";
import * as Tabs from "@radix-ui/react-tabs";
import { useTranslations } from "use-intl";

type Props = {
  messages: Array<Message>;
  tabIndex: number;
  onTabChange(tabIndex: number): void;
  onLocaleChange(locale: "en" | "de"): void;
};

export default function Navigation({
  messages,
  tabIndex,
  onTabChange,
  onLocaleChange,
}: Props) {
  const unreadMessagesCount = messages.filter(
    (message) => !message.read
  ).length;

  const t = useTranslations("NavigationTab");

  return (
    <Tabs.List
      className="flex gap-7 text-base font-medium bg-slate-50 px-10"
      aria-label="Manage messages"
    >
      <NavigationTab
        label={t("addMessage")}
        isActive={tabIndex === 0}
        tabIndex={tabIndex}
        onTabChange={() => onTabChange(0)}
        unreadMessagesCount={undefined}
        value="AddMessageTab"
      />
      <NavigationTab
        label={t("messages")}
        isActive={tabIndex === 1}
        tabIndex={tabIndex}
        onTabChange={() => onTabChange(1)}
        unreadMessagesCount={unreadMessagesCount}
        value="MessagesTab"
      />
      <LocalePicker onLocaleChange={onLocaleChange} />
    </Tabs.List>
  );
}
