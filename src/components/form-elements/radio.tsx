export default function Radio({Legend, Description, Type, Options}) {
  return (
    <>
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900 ">{Legend}</legend>
      {Description && <p className="mt-1 text-sm leading-6 text-gray-600 ">{Description}</p>}
      <div className="mt-6 space-y-6">
        {Options.map((option, index) => (
          <div key={index} className="flex items-center gap-x-3">
            <input
              id={option}
              name={option}
              type={Type}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <label htmlFor={option} className="block text-sm font-medium leading-6 text-gray-900 ">
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
    </>
  )
}
