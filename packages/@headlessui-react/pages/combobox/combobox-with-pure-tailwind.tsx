import React, { useState, useEffect } from 'react'
import { Combobox } from '@headlessui/react'

import { classNames } from '../../src/utils/class-names'

let people = [
  'Wade Cooper',
  'Arlene Mccoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
  'Caroline Schultz',
  'Mason Heaney',
  'Claudie Smitham',
  'Emil Schaefer',
]

export default function Home() {
  let [active, setActivePerson] = useState(people[2])

  // Choose a random person on mount
  useEffect(() => {
    setActivePerson(people[Math.floor(Math.random() * people.length)])
  }, [])

  return (
    <div className="flex justify-center w-screen h-full p-12 bg-gray-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="space-y-1">
          <Combobox
            value={active}
            onChange={value => {
              console.log('value:', value)
              setActivePerson(value)
            }}
            onSearch={value => {
              console.log('search:', value)
            }}
          >
            <Combobox.Label className="block text-sm font-medium leading-5 text-gray-700">
              Assigned to
            </Combobox.Label>

            <div className="relative">
              <span className="relative inline-flex flex-row rounded-md overflow-hidden shadow-sm border-2 border-indigo-500">
                <Combobox.Input className="outline-none px-3 py-1" />
                <Combobox.Button className="focus:outline-none px-1 bg-gray-100 cursor-default border-l-2 border-indigo-500 text-indigo-600">
                  <span className="flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Combobox.Button>
              </span>

              <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
                <Combobox.Options className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5">
                  {people.map(name => (
                    <Combobox.Option
                      key={name}
                      value={name}
                      className={({ active }) => {
                        return classNames(
                          'relative py-2 pl-3 cursor-default select-none pr-9 focus:outline-none',
                          active ? 'text-white bg-indigo-600' : 'text-gray-900'
                        )
                      }}
                    >
                      {({ active, selected }) => (
                        <>
                          <span
                            className={classNames(
                              'block truncate',
                              selected ? 'font-semibold' : 'font-normal'
                            )}
                          >
                            {name}
                          </span>
                          {selected && (
                            <span
                              className={classNames(
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                active ? 'text-white' : 'text-indigo-600'
                              )}
                            >
                              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </div>
          </Combobox>
        </div>
      </div>
    </div>
  )
}
