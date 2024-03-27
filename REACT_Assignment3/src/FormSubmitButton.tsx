import { useTranslations } from "use-intl";

export default function FormSubmitButton() {
  const t = useTranslations("FormSubmitButton");
  return (
    <div className="md:flex md:items-center">
      <div className="md:w-1/3 px-10">
        <button
          className="shadow bg-red-800 hover:bg-red-900 focus:shadow-outline focus-visible:outline-slate-800 text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >
          {t("submit")}
        </button>
      </div>
      <div className="md:w-2/3"></div>
    </div>
  );
}
