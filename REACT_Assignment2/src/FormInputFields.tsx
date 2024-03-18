export default function FormInputFields() {
  return (
    <div className="addMessageForm-inputFields">
      <label>
        Subject
        <input
          className="addMessageForm-input"
          type="text"
          required
          name="subject"
        />
      </label>
      <br />
      <label>
        Body
        <input
          className="addMessageForm-input"
          type="text"
          required
          name="body"
        />
      </label>
    </div>
  );
}
