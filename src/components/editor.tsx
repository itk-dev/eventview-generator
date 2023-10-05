import Select from './form-elements/select'
import Radio from './form-elements/radio'
import { HexColorPicker, HexColorInput } from "react-colorful";
import Color from './form-elements/color';
import ReactSelect from './form-elements/react-select'

export default function Editor({setEventViewType, handleThemeColorForegroundChange, handleThemeColorBackgroundChange, themeColor}) {

  const layoutTypeSelectOptions = [
    { value: 'single', label: 'Single event' },
    { value: 'list', label: 'List of events' },
  ]

  const organizerSelectOptions = [
    { value: 'den-gamle-by', label: 'Den Gamle By' },
    { value: 'aak-bib', label: 'Aarhus Kommunes Bibliotekter' },
    { value: 'aros', label: 'Aros' },
    { value: 'aarhus-festuge', label: 'Aarhus Festuge' }
  ]

  const eventSelectOptions = [
    { value: 'mad--mere-end-et-maaltid', label: 'Mad - Mere end et måltid' }
  ]

  return (
    <div id="editor" className="overflow-y-auto p-4">
      <div className="border-b pb-4 mb-4">
        <span className="text-sm text-blue-700">Eventview generator</span>
        <h1 className="text-2xl">Configure your event view</h1>
      </div>

      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 ">Layout</h2>
            <p className="mt-1 mb-4 text-sm leading-6 text-gray-600 ">Configure the layout and style</p>

            <Select Size="col-span-full" Label="Select type" Name="layout-type" Options={layoutTypeSelectOptions} setEventViewType={(value) => setEventViewType(value)} />

            <div className="flex gap-4">
              <div>
                <Color Label="Select foreground theme color" Name="theme-color-primary" setThemeColor={(value) => handleThemeColorForegroundChange(value)} themeColor={themeColor.foreground}/>
              </div>
              <div>
                <Color Label="Select background theme color" Name="theme-color-primary" setThemeColor={(value) => handleThemeColorBackgroundChange(value)} themeColor={themeColor.background}/>
              </div>
            </div>

          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 ">Content</h2>
            <p className="mt-1 mb-4 text-sm leading-6 text-gray-600 ">What content should be shown</p>

            <ReactSelect Label="Organizer" Name="organizer-select" Options={organizerSelectOptions} />
            <ReactSelect Label="Event" Name="event-select" Options={eventSelectOptions} disabled />
          </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Kopier script kode
          </button>
          <button
            type="submit"
            className="rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Kopier iFrame kode
          </button>
        </div>
      </form>

    </div>
  )
}