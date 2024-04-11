import CreateRoomFormInputField from "./CreateRoomFormInputField";
import { onSubmit } from "./actions";

export default function onSubmitForm() {
  return (
    <form action={onSubmit} className="flex flex-col gap-5">
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
    </form>
  );
}
