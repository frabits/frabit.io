//"use server"
import Image from "next/image";
import Route from '@/lib/route';
import React from "react";
import {ChevronUpIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";
import {Disclosure} from "@headlessui/react";


const Severities = [
    {
        name: 'Severity 1',
        description:
            'A Severity Level 1 issue is a critical production error within the software that severely impacts the Customer’s use of the software for production purposes, such as the loss of production data or where production systems are not functioning and no work-around exists. Frabit will respond to Severity Level 1 issues within one hour during Normal Business Hours, and use continuous efforts during applicable Normal Business Hours to provide a resolution for any Level 1 issues as soon as is commercially reasonable.',
        tips: "Critical business impact"
    },
    {
        name: 'Severity 2',
        description:
            'A Severity Level 2 issue is an error within the software where the customer’s system is functioning for production purposes but in a reduced capacity, such as a problem that is causing significant impact to portions of the customer’s business operations and productivity, or where the software is exposed to potential loss or interruption of service. Frabit will respond to Severity Level 2 issues within four hours during Normal Business Hours, and use continuous efforts during the Normal Business Hours to provide a resolution for any Severity Level 2 issues.',
        tips: "Major business impact"
    },
    {
        name: 'Severity 3',
        description:
            'A Severity Level 3 issue is a medium-to-low impact error that involves partial and/or non-critical loss of functionality for production purposes or development purposes, such as a problem that impairs some operations but allows the customer’s operations to continue to function. Errors for which there is limited or no loss or functionality or impact to the customer’s operation and for which there is an easy work-around qualify as Severity Level 3. General questions are also Severity Level 3 issues. Frabit will respond to Severity Level 3 issues within one Business Day during Normal Business Hours, and use reasonable efforts to provide a resolution for any Severity Level 3 issues in time for an upcoming release of the software. All inbound production email cases shall have an initial status of Severity Level 3.',
        tips: "Minor business impact or general questions"
    },
];

const Level = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">Severity classification</h1>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 rounded-lg border border-cyan-700 bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900">
                    {Severities.map(({name,description,tips}, idx) => (
                        <div className="grid grid-cols-4" key={idx}>
                                <div className="p-6 pb-0 md:border-b md:border-b-cyan-700 md:pb-6">
                                    <div className="grid grid-rows-2 grid-flow-col">
                                        <span className="row-span-1 text-cyan-50 text-xl font-bold">{name}</span>
                                        <span className="row-span-1 text-slate-400 text-base">{tips}</span>
                                    </div>
                                </div>
                                <div className="flex col-span-3 border-b border-b-cyan-700 p-6 text-slate-400">{description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Level;