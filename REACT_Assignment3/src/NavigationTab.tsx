type Props = {
  label: string;
  isActive: boolean;
  tabIndex: number;
  onTabChange(tabIndex: number): void;
  unreadMessagesCount: number;
};

export default function NavigationTab({
  label,
  isActive,
  tabIndex,
  onTabChange,
  unreadMessagesCount,
}: Props) {
  const commonClasses = "pb-2";
  return (
    <div>
      <button
        className={
          isActive
            ? commonClasses +
              " " +
              "text-slate-800 border-b-4 border-red-800 dark:text-white dark:border-red-600"
            : commonClasses +
              " " +
              "text-slate-500 dark:text-gray-200 hover:border-b-4 hover:border-slate-500 hover:text-slate-800"
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
      </button>
    </div>
  );
}
