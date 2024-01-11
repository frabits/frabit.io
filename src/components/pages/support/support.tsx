import {CloudIcon, SquaresPlusIcon} from "@heroicons/react/20/solid";
import {MENU} from "@/lib/menus";
import Link from "@/components/common/link";
import ExternalIcon from "@/assets/external.inline.svg";
import Desc from './desc';
import Level from './level';
import Sla from './sla';
import Steps from './steps';

import React from "react";
import Route from '@/lib/route';

const plan = [
    { name: 'Frabit Community', useCase: 'Small teams', price:'Free', href: '#'},
    { name: 'Frabit Enterprise', useCase: 'Frabit ultimate version that fully ',price:'Free', href: '#'},
    { name: 'Frabit Cloud', useCase: 'The next-gen database automatic operation platform',price:'Free', href: '#'},
]

const feature = [
    {
        name: 'DATABASES',
        items: [
            { name: 'MySQL', enabled:true },
            { name: 'PostgreSQL', enabled:true },
            { name: 'Snowflake', enabled:true },
            { name: 'Oracle', enabled:true },
            { name: 'SQL Server', enabled:true },
            { name: 'MongoDB', enabled:true },
            { name: 'Redis', enabled:true },
            { name: 'Redshift', enabled:true},
        ],
    }
];

const Support = () =>{
    return (
            <div className="grid grid-cols-1  py-20 sm:gap-y-14">
                <div className="mx-auto pt-10 max-w-2xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Support Center</h1>
                    <div className="mt-6 font-bold text-xl text-neutral-200">Trusted support services for your organization</div>
                    {/*Ultimate vendor*/}
                    <div className="flex justify-center relative text-cyan-50 space-x-6 pt-8 pb-6">
                        Here at Frabit Labs, best-in-class support comes with your Cloud subscription. Our Support Services team follows the same vision as our product, bringing you unparalleled performance, ease of use, and exceptionally fast, high-quality results.
                    </div>
                    <div className="grid grid-cols-2 gap-10  justify-items-center">
                        <a className="rounded-2xl bg-gradient-to-r from-cyan-900 to-cyan-900 justify-items-center p-5 w-full text-cyan-50 w-60 h-40"
                           href="#"
                           target="_blank"
                        >
                            <div className="flex flex-col justify-between items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-20 h-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" fill="#06b6d4"/>
                                    </svg>
                                </div>
                                <div className="grid grid-rows-2">
                                    <span className="justify-items-center">New support case via</span>
                                    <span className="text-cyan-500">Frabit Cloud</span>
                                </div>
                            </div>
                        </a>
                        <a className="rounded-2xl bg-gradient-to-r from-cyan-900 to-cyan-900 p-5 w-full text-cyan-50 w-60 h-40"
                           href="mailto:support@frabit.io"
                           target="_blank"
                        >
                            <div className="flex flex-col justify-between items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-20 h-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" fill="#06b6d4"/>
                                    </svg>
                                </div>
                                <div className="grid grid-rows-2">
                                    <span className="">Email us at</span>
                                    <span className="text-cyan-500">support@frabit.io</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 150" stroke-width="1.5" stroke="currentColor" className="w-full">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M-35 0L693.808 86.1145C714.198 88.5237 734.801 88.5093 755.187 86.0717L1475 0V360H-35V0Z" fill="#06b6d4"/>
                    </svg>
                    <div className="bg-cyan-500 w-full h-60">
                        <div className="bg-cyan-500 mx-auto max-w-3xl px-8 text-center text-base">
                            <p className="mb-4 text-cyan-50">
                                Please note that only Subscription customers have a Service Level Agreement on support incidents. If you are not currently a Frabit Cloud customer – while we will try to answer your question, we’d encourage you to go instead to our community resources:
                            </p>
                            <div className="grid justify-items-center">
                                <a className="flex justify-items-center flex-items-center" href={Route.SLACK} target="_blank">
                                    <p className="flex flex-row justify-items-center mb-4 font-bold text-cyan-50">Frabit community Slack channel
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"/>
                                        </svg>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Desc/>
                <Level/>
                <Sla/>
                <Steps/>
                <div className="place-self-center text-center items-center">
                    <p className="max-w-3xl pt-22 text-center text-base leading-relaxed text-slate-400 ">Our Frabit Support Services team is focused not only on your quick questions or break-fix issues, but also on your hardest questions such as how to define your schema, how to model your data, or how to migrate from a legacy system. Our Expert Sessions, included with our Support for all enterprise , allows you to access our Frabit experts via a virtual consultative support question - please open a case to get started.</p>
                </div>
            </div>
    );
};

export default Support;