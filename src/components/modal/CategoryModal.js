import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
export default function MyModal({ item }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="btn blue !text-xs"
      >
        Ver más
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800/80 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl">
                  <div className='p-6'>
                    <Dialog.Title
                      as="h3"
                      className="flex items-center justify-start pt-2 font-serif text-4xl leading-6 text-yellow-500 "
                    >
                      {item.title}
                    </Dialog.Title>
                    <div className="object-cover w-full mt-6">
                      <img
                        className="object-cover w-64 h-40 pb-0 mb-0 "
                        alt={hit.title}
                        src={`https:${hit.featuredImg.file.url}?w=450&h=450&fm=png&q=80`}
                      />
                    </div>
                    <div className="mt-5">
                      <p className="font-mono prose text-gray-100">
                        {item.excerpt.excerpt}
                      </p>
                      <div className="grid mt-5">
                        <a
                          rel="noopener noreferrer"
                          href={item.url}
                          target="_blank"
                          className="btn yellow !text-xs "
                        >
                          Ir a la web de {item.title}
                        </a>
                      </div>
                    </div>
                    <button type="button" className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 cursor-pointer opacity-80 hover:opacity-100" onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
