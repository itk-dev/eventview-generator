export default function InputText({Size, Label, Name, AutoComplete}) {
  return (
    <div className={Size}>
      <label htmlFor={Name} className="block text-sm font-medium leading-6 text-gray-900 ">
        {Label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={Name}
          id={Name}
          autoComplete={AutoComplete}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}
