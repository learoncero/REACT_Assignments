import { useTranslations } from "use-intl";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <div>
      <h1 className=" bg-slate-50 text-slate-800 flex items-center text-5xl font-extrabold dark:text-white py-8 px-10">
        {t("heading")}
      </h1>
    </div>
  );
}
