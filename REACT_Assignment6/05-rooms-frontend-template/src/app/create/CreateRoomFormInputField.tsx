import React from "react";
import { useFormStatus } from "react-dom";

type Props = {
  label: string;
  type: string;
  name: string;
};

export default function CreateRoomFormInputField({ label, type, name }: Props) {
  const status = useFormStatus();

  return (
    <label className="flex flex-col gap-1">
      <span className="font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        disabled={status.pending}
        required
        className="p-2 border border-gray-300 rounded-md"
      />
    </label>
  );
}
