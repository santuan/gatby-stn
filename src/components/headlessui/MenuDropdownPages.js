import { Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { BsCaretUp } from "react-icons/bs"

export default function Example() {
  return (
    <div className="fixed bottom-0 right-0 z-50 w-64 m-3 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn !text-sm uppercase yellow">
            Indice
            <BsCaretUp className="w-4 h-4 ml-2 -mr-1" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 text-white origin-top-right divide-y divide-gray-100 rounded-md shadow-lg w-72 bg-gray-800/80 bottom-12 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col items-center justify-center px-4 py-5 space-y-3 ">
              <Menu.Item>
                <a
                  aria-label="Ir al primer ejemplo"
                  href="#intro"
                  className="btn  !text-xs w-full !justify-between"
                >
                   Introducción <span>0</span>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  aria-label="Ir al primer ejemplo"
                  href="#ejemplo1"
                  className="btn blue !text-xs w-full !justify-between"
                >
                  Comparar estilos <span>1</span>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  aria-label="Ir al primer ejemplo"
                  href="#ejemplo2"
                  className="btn red !text-xs w-full !justify-between"
                >
                 Variaciones de una imagen <span>2</span>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  aria-label="Ir al primer ejemplo"
                  href="#ejemplo3"
                  className="btn yellow !text-xs w-full !justify-between"
                >
                  Variaciones de textos <span>3</span>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  aria-label="Ir al primer ejemplo"
                  href="#ejemplo4"
                  className="btn green !text-xs w-full !justify-between"
                >
                  Generación espontánea <span>4</span>
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
