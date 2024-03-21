import { Message } from "./App";
import NavigationTab from "./NavigationTab";
import * as Tabs from "@radix-ui/react-tabs";

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
    <Tabs.Root defaultValue="AddMessageTab">
      <Tabs.List
        className="flex gap-7 text-base font-medium bg-slate-50 px-10"
        aria-label="Manage your account"
      >
        {" "}
        <Tabs.Trigger value="AddMessageTab">
          <NavigationTab
            label={"ADD MESSAGE"}
            isActive={tabIndex === 0}
            tabIndex={tabIndex}
            onTabChange={() => onTabChange(0)}
            unreadMessagesCount={undefined}
          />
        </Tabs.Trigger>
        <Tabs.Trigger value="MessagesTab">
          <NavigationTab
            label={"MESSAGES"}
            isActive={tabIndex === 1}
            tabIndex={tabIndex}
            onTabChange={() => onTabChange(1)}
            unreadMessagesCount={unreadMessagesCount}
          />
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
