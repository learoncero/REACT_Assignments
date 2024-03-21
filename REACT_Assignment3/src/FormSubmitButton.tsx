export default function FormSubmitButton() {
  return (
    <div className="md:flex md:items-center">
      <div className="md:w-1/3 px-10">
        <button
          className="shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
      <div className="md:w-2/3"></div>
    </div>
  );
}
