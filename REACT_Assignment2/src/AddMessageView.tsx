import { FormEvent } from "react";

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
      <label>
        Subject
        <input type="text" required name="subject" />
      </label>
      <br />
      <label>
        Body
        <input type="text" required name="body" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
