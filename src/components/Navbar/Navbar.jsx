import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { alumnos, menuCelular, aprendizaje } from './logs'
import { NavbarLogo } from './NavbarComponents/NavbarLogo'
import { HamburguerButton, NavbarGroupButton, NavbarProfileButton } from './NavbarComponents/NavbarButtons'
import { GroupPrincipalPanel } from './NavbarComponents/GroupOptions'
import { NavbarSimpleLink } from '../Links/NavbarOptionLink'
import './Navbar.css';
import { useSelector } from 'react-redux'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = ({ licenseType }) => {
    return (
        <Popover className="relative dark:bg-gray-900 bg-gray-900">
            <NavbarDesktop licenseType={licenseType} />
            <NavbarMovile />
        </Popover>
    )
}

export const NavbarDesktop = ({ licenseType }) => {
    return (
        <div className="max-w-full mx-auto px-4 sm:px-6">

            <div className="flex justify-between items-center py-3 sm:py-1 md:justify-start md:space-x-10">

                <NavbarLogo link={'/app/dashboard'} />

                <HamburguerButton />

                {/* MENU CENTRAL */}

                {(licenseType === 1) ? <NavbarContentParticular /> : <NavbarContentProfesional />}

                {/* PARTE DERECHA */}

                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                    {/* PERFIL
                    <Popover className="relative">
                        {({ open, close }) => (
                            <>
                                <NavbarProfileButton classNames={classNames} open={open} />

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-50" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 left-7 transform -translate-x-96 mt-3 px-2 w-screen max-w-md sm:px-0">
                                        <GroupPrincipalPanel dataOptions={perfil} close={close} hasSecondaryPanel={true} />
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover> */}

                </div>
            </div>

        </div>
    )
}

const NavbarContentProfesional = () => {

    const { alumnoSelected } = useSelector(state => state.alumnos);
    const [alumnoActivo, setAlumnoActivo] = useState({});

    useEffect(() => {
        setAlumnoActivo(alumnoSelected);
    }, [alumnoSelected]);

    return (
        <Popover.Group as="nav" className="hidden md:flex space-x-10">

            {/* ALUMNOS */}

            <Popover className="relative mt-1">
                {({ open, close }) => (
                    <>
                        <NavbarGroupButton classNames={classNames} open={open} title={'Alumnos'} />

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-50" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-7 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <GroupPrincipalPanel dataOptions={alumnos} close={close} />
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            {/* APRENDIZAJE */}
            <Popover className="relative mt-1">
                {({ open, close }) => (
                    <>
                        <NavbarGroupButton classNames={classNames} open={open} title={'Aprendizaje'} />

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-50" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-7 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <div className="rounded-t-lg bg-gray-900 -mb-5 sm:p-7 text-center">
                                    <span className='bg-gray-700 px-3 py-2 rounded-md me-5'>Alumno Activo:</span>
                                    <span className='text-indigo-400'>{alumnoActivo.nombreCompleto}</span>
                                </div>
                                <div className='border-t-2 border-gray-500 mt-3'>
                                    <GroupPrincipalPanel dataOptions={aprendizaje} close={close} />
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

        </Popover.Group>
    )
}

const NavbarContentParticular = () => {
    return (
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <NavbarSimpleLink link={'/app/seccion/listado'} title={'Secciones'} />
            <NavbarSimpleLink link={'/app/evaluacion/listado'} title={'Evaluaciones'} />
        </Popover.Group>
    )
}

const NavbarMovile = () => {
    return (
        <Transition
            as={Fragment}
            enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
        >
            <Popover.Panel focus className="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20">
                {({ close }) => (
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-700">

                        <div className="flex items-center justify-between divide-y-2 divide-gray-700 pt-3 pb-3 px-5">
                            <p className='text-gray-100 mt-2'>Menu Desplegable</p>
                            <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>

                        <div className="pt-1 pb-6 px-5">
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {menuCelular.map((item) => (
                                        <Link
                                            key={item.name} to={item.href} onClick={() => close()}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 bg-gray-700"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-100">{item.name}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        <div className="py-4 px-5 space-y-6">
                            <div className="flex justify-center gap-y-4 gap-x-8">
                                <Link
                                    to="/app/about" onClick={() => close()}
                                    className="text-base font-medium text-gray-100 hover:text-gray-700 bg-gray-600 px-5 py-2 rounded-md"
                                >
                                    Acerca De
                                </Link>
                                <button
                                    onClick={() => close()}
                                    className="text-base font-medium text-gray-100 hover:text-gray-700 bg-rose-700 px-4 py-2 rounded-md"
                                >
                                    Cerrar Sesion
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </Popover.Panel>
        </Transition>
    )
}
