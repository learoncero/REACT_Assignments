type Props = {
  label: string;
  name: string;
  type: string;
  required: boolean;
};

export default function FormInputField({label, name, type, required}: Props) {
  return (
    <div className="addMessageForm-inputFields">
      <label>
        {label}
        <input
          className="addMessageForm-input"
          type={type}
          required={required}
          name={name}
        />
      </label>
      <br />
    </div>
  );
}
