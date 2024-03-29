import { FormEvent } from "react";
import "./AddMessageView.css";
import FormInputField from "./FormInputField";
import FormSubmitButton from "./FormSubmitButton";

type Props = {
  onSubmit(subject: string, body: string): void;
};

export default function AddMessageView({ onSubmit }: Props) {
  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = data.get("subject") as string;
    const body = data.get("body") as string;

    onSubmit(subject, body);

    form.reset();
    form.subject.focus();
  }

  return (
    <form className="addMessageForm" onSubmit={onFormSubmit}>
      <FormInputField label="Subject" name="subject" type="text" required={true} />
      <FormInputField label="Body" name="body" type="text" required={true} />
      <FormSubmitButton />
    </form>
  );
}
