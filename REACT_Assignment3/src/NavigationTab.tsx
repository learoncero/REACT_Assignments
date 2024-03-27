import * as Tabs from "@radix-ui/react-tabs";

type Props = {
  label: string;
  isActive: boolean;
  tabIndex: number;
  onTabChange(tabIndex: number): void;
  unreadMessagesCount: number;
  value: string;
};

export default function NavigationTab({
  label,
  isActive,
  tabIndex,
  onTabChange,
  unreadMessagesCount,
  value,
}: Props) {
  const commonClasses = "pb-2";
  return (
    <div>
      <Tabs.Trigger
        value={value}
        className={
          isActive
            ? commonClasses +
              " " +
              "text-slate-800 border-b-4 border-red-800 dark:text-white dark:border-red-600"
            : commonClasses +
              " " +
              "text-slate-500 hover:border-b-4 hover:border-slate-500 hover:text-slate-800 focus-visible:border-b-4 focus-visible:border-slate-500 focus-visible:text-slate-800"
        }
        onClick={() => onTabChange(tabIndex)}
      >
        {label}{" "}
        {unreadMessagesCount !== undefined &&
          (unreadMessagesCount > 5
            ? "(5+)"
            : unreadMessagesCount !== 0
            ? "(" + unreadMessagesCount + ")"
            : null)}
      </Tabs.Trigger>
    </div>
  );
}
