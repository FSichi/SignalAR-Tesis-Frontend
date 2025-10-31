import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const InfoForLicences = () => {

    const title = `Tipos de Licencias`

    return (
        <Popover className="relative">
            {({ open, close }) => (
                <>
                    <Popover.Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2 text-orange-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1"
                    >

                        <Popover.Panel
                            className="absolute z-10 transform w-max max-w-2xl xl:-translate-x-3/4 xl:-translate-y-44 xl:-left-50 md:-translate-x-3/4 md:left-8 md:-translate-y-52 border border-primary"
                            style={{ backgroundColor: '#000a12', borderRadius: '15px' }}
                            onClick={() => { close(); }}
                        >
                            <div className="shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-1 px-5 py-6 sm:gap-8 sm:p-8" >
                                    <p className="mt-1 text-2xl text-gray-400">{title}</p>
                                    <p className="mt-1 text-md text-gray-400">
                                        <span className='text-orange-500 font-bold'> Licencia Personal </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Eveniet, amet quo dignissimos a saepe voluptatem error, ducimus recusandae reiciendis 
                                        libero earum quaerat aspernatur numquam possimus tempora repudiandae. Vero, non dicta.
                                    </p>
                                    <p className="mt-1 text-md text-gray-400">
                                        <span className='text-orange-500 font-bold'> Licencia Profesional - Particular </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Eveniet, amet quo dignissimos a saepe voluptatem error, ducimus recusandae reiciendis 
                                        libero earum quaerat aspernatur numquam possimus tempora repudiandae. Vero, non dicta.
                                    </p>
                                    <p className="mt-1 text-md text-gray-400">
                                        <span className='text-orange-500 font-bold'> Licencia Profesional - Institucional </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Eveniet, amet quo dignissimos a saepe voluptatem error, ducimus recusandae reiciendis 
                                        libero earum quaerat aspernatur numquam possimus tempora repudiandae. Vero, non dicta.
                                    </p>
                                </div>
                            </div>

                        </Popover.Panel>

                    </Transition>
                </>
            )}
        </Popover>
    )
}