"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon,CloudIcon,SquaresPlusIcon } from '@heroicons/react/20/solid'
import Route from '@/lib/route';

import GithubStarCounter from './star-us';

const products = [
    { name: 'FrabitCloud', description: 'Frabit cloud version that fully ', href: '#', icon: CloudIcon },
    { name: 'Frabit Platform', description: 'The next-gen database automatic operation platform', href: '#', icon: SquaresPlusIcon },
]

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HeaderS = ({ hasBanner = false }: { hasBanner?: boolean }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <header className="bg-zinc-900 scrolled">
            <nav className="mx-auto flex items-center justify-between flex-cols-3 max-w-7xl  p-6" aria-label="Global">
                <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Frabit Labs</span>
                        <img className="h-12 w-auto" src="/images/logo.svg" alt="" />
                    </a>
                </div>
                <div className="flex">
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex bg-zinc-900 items-center gap-x-1 text-sm font-semibold leading-6 text-cyan-50">
                            Products
                            <ChevronDownIcon className="h-5 w-5 flex-none text-cyan-50" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-sm font-semibold leading-6 text-cyan-50">
                        Features
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-cyan-50">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-cyan-50">
                        Company
                    </a>
                </Popover.Group>
                </div>
                <div className="flex">
                    <div className="flex flex-cols gap-3 items-center justify-between">
                        <div className=" items-center justify-items-center">
                            <GithubStarCounter />
                        </div>
                        <a href={Route.GITHUB} className="text-sm font-semibold leading-6 text-cyan-50">
                            <button className="rounded h-10 p-2 w-25 ">
                                <span className="flex items-center whitespace-nowrap">Star Us</span>
                            </button>
                        </a>
                        <a href={Route.CLOUD} className="text-sm font-semibold leading-6 text-cyan-50">
                            <button className="rounded h-10 p-2 w-25 bg-cyan-500 hover:bg-cyan-600">
                                <span className="flex items-center whitespace-nowrap">Try Cloud</span>
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
       </>
    );
};

export default HeaderS;