import { useFormStatus } from "react-dom";

type Props = {
  label: string;
};

export default function CreateRoomFormSubmitButton({ label }: Props) {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-sky-400 rounded text-white font-semibold w-full py-2 mt-4"
      disabled={status.pending}
    >
      {label}
    </button>
  );
}
