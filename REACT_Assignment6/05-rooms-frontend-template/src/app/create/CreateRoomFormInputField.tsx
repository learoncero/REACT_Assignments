import React from "react";

type Props = {
  label: string;
  type: string;
  name: string;
};

export default function CreateRoomFormInputField({ label, type, name }: Props) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="p-2 border border-gray-300 rounded-md"
      />
    </label>
  );
}
