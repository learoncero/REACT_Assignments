type Props = {
  label: string;
  name: string;
  type: string;
  required: boolean;
};

export default function FormInputField({ label, name, type, required }: Props) {
  return (
    <div className="md:flex md:items-center mb-6 px-10">
      <div className="md:w-1/3">
        <label className="block text-slate-800 font-medium mb-1">{label}</label>
      </div>
      <div className="md:w-2/3">
        <input
          className=" appearance-none border-2 border-slate-200 hover:bg-slate-50 rounded w-full py-2 px-4 text-slate-800 leading-tight focus:outline-none focus:border-red-800"
          type={type}
          required={required}
          name={name}
        />
      </div>
    </div>
  );
}
