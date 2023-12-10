"use client"
import React, { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon,CloudIcon,SquaresPlusIcon } from '@heroicons/react/20/solid'
import Route from '@/lib/route';

import GithubStarCounter from './star-us';
import Banner from "@/components/common/banner";
import PROMO_DATA from "@/lib/promo-data";

const products = [
    { name: 'Frabit Platform', description: 'The next-gen database automatic platform', href: '#', icon: SquaresPlusIcon },
]

const callsToAction = [
    { name: 'Watch demo', href: Route.YOUTUBE, icon: PlayCircleIcon },
    { name: 'Contact sales', href: Route.CONTACTS, icon: PhoneIcon },
]


const Header = ({ hasBanner = false }: { hasBanner?: boolean }) => {
    const topBanner = PROMO_DATA.TOP_BANNER
    return (
        <>
            <div className="w-full">
                {topBanner && <Banner bannerText={topBanner.title} bannerUrl={topBanner.pathname} disable={topBanner.disabled} />}
                <header className="bg-gradient-to-r from-cyan-900 to-zinc-800">
                    <nav className="mx-auto flex items-center justify-between flex-cols-3 max-w-7xl  p-1" aria-label="Global">
                        <div className="flex">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Frabit Labs</span>
                                <img className="h-12 w-auto" src="/images/logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="flex">
                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Popover className="relative ">
                                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-cyan-50">
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
                                        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl border border-cyan-500 shadow-lg ring-1 ring-cyan-500">
                                            <div className="p-4 bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900">
                                                {products.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-cyan-500"
                                                    >
                                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg text-cyan-50 group-hover:text-cyan-50">
                                                            <item.icon className="h-6 w-6 text-cyan-50" aria-hidden="true" />
                                                        </div>
                                                        <div className="flex-auto">
                                                            <a href={item.href} className="block font-semibold text-cyan-50">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </a>
                                                            <p className="mt-1 text-cyan-50">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-cyan-500">
                                                {callsToAction.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6  text-cyan-50"
                                                    >
                                                        <item.icon className="h-5 w-5 flex-none text-cyan-50" aria-hidden="true" />
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                                <a href={Route.DOCS} className="text-sm font-semibold leading-6 text-cyan-50">
                                    Docs
                                </a>
                                <a href={Route.SUPPORT} className="text-sm font-semibold leading-6 text-cyan-50">
                                    Support
                                </a>
                                <a href={Route.ABOUT} className="text-sm font-semibold leading-6 text-cyan-50">
                                    About
                                </a>
                                <a href={Route.CONTACTS} className="text-sm font-semibold leading-6 text-cyan-50">
                                    Contact Us
                                </a>
                            </Popover.Group>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-cols-3 gap-3 items-center justify-between">
                                <div className="cols-span-2 items-center justify-items-center">
                                    <GithubStarCounter />
                                </div>
                            </div>
                            <a href={Route.DEMO} className="text-sm items-center font-semibold leading-6 text-cyan-50">
                                <span className="flex items-center justify-items-center rounded h-10 w-25 p-3">Request a demo</span>
                            </a>
                            <a href={Route.DOWNLOADS} className="text-sm items-center font-semibold leading-6 text-cyan-50">
                                <span className="flex items-center justify-items-center rounded h-10 w-25 p-3 bg-cyan-500 hover:bg-cyan-600">Downloads</span>
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
       </>
    );
};

export default Header;