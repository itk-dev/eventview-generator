// React select from:
// https://react-select.com/home

import React from 'react'
import Select from 'react-select'
import { useState } from "react";

export default function ReactSelect({Label, Name, Options, Disabled}) {

  const [activeIndex, setActiveIndex] = useState(Disabled);

  return (
    <div className="col-span-full mb-4">
      <label htmlFor={Name} className="block text-sm font-medium leading-6 text-gray-900">
        {Label}
      </label>
      <div className="mt-2">
        <Select
          instanceId={Name}
          id={Name}
          name={Name}
          options={Options}
          isDisabled={activeIndex}
        />
      </div>
    </div>
  )
}
