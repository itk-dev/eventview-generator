export default function Select({Label, Name, Options, setEventViewType}) {
  return (
    <div className="col-span-full mb-4">
      <label htmlFor={Name} className="block text-sm font-medium leading-6 text-gray-900">
        {Label}
      </label>
      <div className="mt-2">
        <select
          onChange={(data) => setEventViewType(data.target.value)}
          id={Name}
          name={Name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        >
          {Options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
