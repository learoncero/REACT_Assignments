"use client";

import { useFormState } from "react-dom";
import CreateRoomFormInputField from "./CreateRoomFormInputField";
import Notification from "@/components/Notification";

type Props = {
  onSubmit: (state, data: FormData) => Promise<any>;
};

export default function onSubmitForm({ onSubmit }: Props) {
  const [state, formAction] = useFormState(onSubmit, undefined);

  const hasResponse = state !== undefined;
  const hasError = hasResponse && state.status !== 200;

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <CreateRoomFormInputField label="Title" type="text" name="title" />
      <CreateRoomFormInputField
        label="Description"
        type="text"
        name="description"
      />
      <CreateRoomFormInputField
        label="Hero URL from pxhere.com"
        type="text"
        name="heroURL"
      />
      <CreateRoomFormInputField
        label="Price per night"
        type="number"
        name="pricePerNight"
      />
      <button
        type="submit"
        className="bg-sky-400 rounded text-white font-semibold w-full py-2 mt-4"
      >
        Submit
      </button>
      {hasError && (
        <Notification type="error">
          An unexpected error occured, please try again later.
        </Notification>
      )}
    </form>
  );
}
