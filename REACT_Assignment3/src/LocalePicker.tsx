import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "use-intl";

type Props = {
  onLocaleChange(locale: "en" | "de"): void;
};

export default function LocalePicker({ onLocaleChange }: Props) {
  const t = useTranslations("LocalePicker");

  return (
    <div className="text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus-visible:border-b-4 focus-visible:border-slate-500 focus-visible:text-slate-800 w-10 text-center ml-7">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="items-center"
            aria-label="Choose language dropdown"
          >
            {t("dropdownTrigger")}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade text-slate-800 dark:text-white dark:bg-slate-800 dark:bg-opacity-90 z-[100] font-semibold"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 text-slate-500">
              CHOOSE LANGUAGE
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              <button onClick={() => onLocaleChange("en")}>English</button>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[35px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              <button onClick={() => onLocaleChange("de")}>Deutsch</button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
