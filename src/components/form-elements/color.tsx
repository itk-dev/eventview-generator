
// Color picker from:
// https://github.com/omgovich/react-colorful#getting-started

import { HexColorPicker, HexColorInput } from "react-colorful";

export default function Color({Name, Label, setThemeColor, themeColor}) {

  return (
    <div className="col-span-full mb-4">
      <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={Name}>{Label}</label>
      <div className="flex flex-col gap-1">
        <HexColorPicker name="hexColorPicker" color={themeColor} onChange={(data) => setThemeColor(data)}/>
          <HexColorInput id={Name} name={Name} prefixed color={themeColor} onChange={(data) => setThemeColor(data)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
  )
}
