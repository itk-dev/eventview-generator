import React from "react"
import Image from 'next/image'
import list from '../mockdata/list.jpg'
import eventData from '../mockdata/event-data.json'
import Event from "./event"

export default function Preview({eventViewType, themeColor}) {

  return (
    <div id="preview" className="overflow-y-auto p-4 bg-slate-100">
      <div className="pb-4 mb-4">
        <span className="text-sm text-blue-700">Eventview preview</span>
      </div>

      {!eventViewType &&
        <div id="empty">
          <p>Start the setup in the editor ... </p>
        </div>
      }

      {eventViewType == "single" &&
        <Event data={eventData[0]} themeColor={themeColor} />
      }
      {eventViewType == "list" &&
        <div className="flex flex-col gap-4">
          <Event data={eventData[0]} themeColor={themeColor} />
          <Event data={eventData[0]} themeColor={themeColor} />
          <Event data={eventData[0]} themeColor={themeColor} />
          <Event data={eventData[0]} themeColor={themeColor} />
        </div>
      }
    </div>
  )
}
